import collections
import json
import random
import sys
import traceback


class JSONRPCError(Exception):
    """Root exception for all errors related to this library"""


class TransportError(JSONRPCError):
    """An error occurred while performing a connection to the server"""

    def __init__(self, exception_text, message=None, *args):
        """Create the transport error with information about the attempted message."""
        if message:
            super(TransportError, self).__init__(
                '%s: %s' % (message.transport_error_text, exception_text), *args)
        else:
            super(TransportError, self).__init__(exception_text, *args)


class ProtocolError(JSONRPCError):
    """An error occurred while dealing with the JSON-RPC protocol"""


class Server(object):
    """A connection to a JSON-RPC server"""

    def __init__(self):
        """Initialize the json-rpc server object."""
        self._server_request_handlers = {}

    def send_message(self, message):
        """Issue the request to the server and return the method result (if not a notification)

        This method must be implemented by the child class.
        """
        raise NotImplementedError()

    def receive_request(self, request):
        """Called by the implementation when a request is received from the server."""
        result = None
        error = None
        args = []
        kwargs = {}
        if isinstance(request.params, list):
            args = request.params
        elif isinstance(request.params, dict):
            kwargs = request.params
        elif request.params is not None:
            raise ProtocolError('Parameters must either be a positional list or named dict.')

        if request.method in self._server_request_handlers:
            try:
                result = self._server_request_handlers[request.method](*args, **kwargs)
            except Exception as exc:
                traceback.print_exception(*sys.exc_info())
                error = {
                    'code': -32000,
                    'message': 'Server Error: %s' % exc,
                }
        else:
            error = {
                'code': -32601,
                'message': 'Method not found',
            }

        if request.msg_id:
            return Response(request, result, error)
        else:
            return None

    def __getattr__(self, method_name):
        if method_name.startswith("_"):  # prevent rpc-calls for private methods
            raise AttributeError("invalid attribute '%s'" % method_name)
        return Method(self.__request, self.__register, method_name)

    def __setattr__(self, method_name, callback):
        if method_name.startswith("_"):  # prevent rpc-calls for private methods
            return super(Server, self).__setattr__(method_name, callback)
        return self.__register(method_name, callback)

    def __request(self, method_name, args=None, kwargs=None):
        """Perform the actual RPC call.

        If _notification=True, send a notification and don't wait for a response
        """
        if kwargs.pop('_notification', False):
            msg_id = None
        else:
            # some JSON-RPC servers complain when receiving str(uuid.uuid4()).
            # Let's pick something simpler.
            msg_id = random.randint(1, sys.maxsize)

        if args and kwargs:
            raise ProtocolError('JSON-RPC spec forbids mixing arguments and keyword arguments')

        # from the specs:
        # "If resent, parameters for the rpc call MUST be provided as a Structured value.
        #  Either by-position through an Array or by-name through an Object."
        if len(args) == 1 and isinstance(args[0], collections.Mapping):
            args = dict(args[0])

        return self.send_message(Request(method_name, args or kwargs, msg_id))

    def __register(self, method_name, callback):
        """Register a callback to be called if the server sends this request to the client."""
        self._server_request_handlers[method_name] = callback


class Message(object):
    """Message to be sent to the jsonrpc server."""

    @property
    def response_id(self):
        return None

    def serialize(self):
        """Generate the raw JSON message to be sent to the server"""
        raise NotImplementedError()

    def parse_response(self, response):
        """Parse the response from the server and return the result."""
        raise NotImplementedError()

    @property
    def transport_error_text(self):
        """Exception text for a transport error."""
        raise NotImplementedError()

    def __str__(self):
        return self.serialize()


class Request(Message):
    """Request a method call on the server."""

    def __init__(self, method=None, params=None, msg_id=None):
        self.method = method
        self.params = params
        self.msg_id = msg_id

    @staticmethod
    def parse(data):
        """Generate a request object by parsing the json data."""
        if 'method' not in data:
            raise ProtocolError('Request from server does not contain method')
        method = data.get('method')
        params = data.get('params')
        msg_id = data.get('id')
        if not isinstance(params, list) and not isinstance(params, dict) and params is not None:
            raise ProtocolError('Parameters must either be a positional list or named dict.')
        return Request(method, params, msg_id)

    @property
    def response_id(self):
        return self.msg_id

    def serialize(self):
        """Generate the raw JSON message to be sent to the server"""
        data = {'jsonrpc': '2.0', 'method': self.method}
        if self.params:
            data['params'] = self.params
        if self.msg_id:
            data['id'] = self.msg_id
        return json.dumps(data)

    def parse_response(self, data):
        """Parse the response from the server and return the result."""
        if self.msg_id is None:
            # Don't parse results for notification requests
            return None

        if not isinstance(data, dict):
            raise ProtocolError('Response is not a dictionary')
        if 'error' in data:
            code = data['error'].get('code', '')
            message = data['error'].get('message', '')
            raise ProtocolError(code, message, data)
        elif 'result' not in data:
            raise ProtocolError('Response without a result field')
        else:
            return data['result']

    @property
    def transport_error_text(self):
        """Exception text for a transport error."""
        return 'Error calling method %r' % self.method


class Response(Message):
    """Respond to a method call from the server."""

    def __init__(self, request, result=None, error=None):
        self.request = request
        self.result = result
        self.error = error

    def serialize(self):
        """Generate the raw JSON message to be sent to the server"""
        data = {'jsonrpc': '2.0', 'id': self.request.msg_id}
        if self.error is not None:
            data['error'] = self.error
        else:
            data['result'] = self.result
        return json.dumps(data)

    def parse_response(self, response):
        """Parse the response from the server and return the result."""
        # Don't parse results from response messages
        return None

    @property
    def transport_error_text(self):
        """Exception text for a transport error."""
        return 'Error responding to server method %r' % self.request.method


class Method(object):
    """Map the methods called on the server to json-rpc methods."""

    def __init__(self, request_method, register_method, method_name):
        self.__request_method = request_method
        self.__register_method = register_method
        self.__method_name = method_name

    def __getattr__(self, method_name):
        if method_name.startswith("_"):  # prevent rpc-calls for private methods
            raise AttributeError("invalid attribute '%s'" % method_name)
        return Method(self.__request_method, self.__register_method,
                      "%s.%s" % (self.__method_name, method_name))

    def __call__(self, *args, **kwargs):
        return self.__request_method(self.__method_name, args, kwargs)

    def __setattr__(self, method_name, callback):
        if method_name.startswith("_"):  # prevent rpc-calls for private methods
            return super(Method, self).__setattr__(method_name, callback)
        return self.__register_method("%s.%s" % (self.__method_name, method_name), callback)
