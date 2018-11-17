# coding=utf8
'''
    py2to3: Utility functions for Py2/Py3 compatibility

    Copyright (C) 2016 Sundar Nagarajan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    For details of the GNU General Pulic License version 3, see the
    LICENSE.txt file that accompanied this program


chr and ord:
    - Designed to behave uniformly across Python2 and Python3
    - chr() and ord() accept int / byte / unicode

frombytes, toBytes, encode, decode:
    - Useful to ENSURE a converted value is a particular type
    - fromBytes: Always returns latin1-encoded unicode
    - toBytes: Returns bytes IF input was latin1-encoded unicode
    - fromBytes and toBytes accept bytes, bytearrays, unicode as input
    - encode: wrapper around codecs.encode
    - decode: wrapper around codecs.decode

fromBytes:
    - Converts input to unicode (same as str in python3)
    - used by InputFromBytes and outputFrombytes decorators
    - If input is ALREADY unicode, it is returned UNCHANGED
    - ANY byte sequence should be convertible using fromBytes
    - For ANY byte sequence: x = toBytes(fromBytes(x))
    - Internally calls decode()

toBytes:
    - Converts input to bytes (same as str in python2)
    - used by inputToBytes and outputToBytes decorators
    - If input is ALREADY bytes it is returned UNCHANGED
    - If input is bytearray, it is returned as bytes
    - If input is unicode, it is encoded using latin1
    - Can raise UnicodeEncodeError
    - Internally calls encode()

    - There IS NO way to automatically discern the encoding of
      a unicode string. In GENERAL, to serialize a unicode value
      to bytes, you need to KNOW the encoding
    - All UTF8 strings cannot be encoded to arbitrary encodings,
        INCLUDING latin1
        e.g.
        s = u'我能吞下玻璃而不伤身体'
        s2 = toBytes(s, 'latin1')  # will raise UnicodeEncodeError

    Except in the following cases, you are better off calling encode():
        - Encode a unicode value returned by fromBytes
        - Encode a unicode value you KNOW is 'latin1'

encode:
    - Converts unicode to bytes using a specified encoding
    - Input MUST be unicode
    - input-->unicode (same as str on python3)
    - output-->bytes (same as str on python2)
    - No default encoding!
    - Can raise UnicodeEncodeError
    - Used by toBytes

decode:
    - Convert bytes to unicode using a specified encoding
    - Input can be bytes / bytearrays
    - input-->bytes (same as str on python2)
    - output-->unicode (same as str on python3)
    - No default encoding!
    - Can raise UnicodeDecodeError
    - Used by fromBytes

hex:
    - Converts BYTES to hex-encoded bytes
    - Internally calls encode()
'''

# Import as: from py2to3 import long, chr, ord, str ...
import sys
import codecs

# Whether conversions should raise ValueError if inputs are
# of wrong type / size
# GOOD for cryptography. Not so good for other cases
SUPPRESS_ERRORS = True

DEF_ENCODING = 'latin1'
PY_VER = sys.version_info[0]
(PY2, PY3) = (PY_VER == 2, PY_VER == 3)
PYPY = (PY2 and sys.subversion[0].lower() == 'pypy')

del PY_VER
if PY3:
    xrange = range
    unicode = str
    unichr = chr
    long = int
    str = str
else:
    xrange = xrange
    unicode = unicode
    unichr = unichr
    long = long
    # TOUGH one force yourself to think in Unicode in Py2
    str = unicode
_chr = chr
_ord = ord


def chr(x):
    '''
    x-->int / byte
    Returns-->BYTE (not str in python3)
        Behaves like PY2 chr() in PY2 or PY3
    if x is str of length > 1 or int > 256
        raises ValueError/TypeError is not SUPPRESS_ERRORS
    '''
    global _chr
    if isinstance(x, int):
        if x > 256:
            if SUPPRESS_ERRORS:
                x = x % 256
        return toBytes(_chr(x))
    elif isinstance(x, bytes):
        x = fromBytes(x)
        if len(x) > 1:
            if not SUPPRESS_ERRORS:
                raise TypeError('chr() found string of length > 2')
            x = x[0]
        return toBytes(x)
    elif isinstance(x, str):
        if len(x) > 1:
            if not SUPPRESS_ERRORS:
                raise TypeError('chr() found string of length > 2')
            x = x[0]
        return toBytes(x)
    else:
        raise TypeError('Unknown type passed to chr: %s', str(type(x)))


def ord(x):
    '''
    x-->char (str of length 1)
    Returns-->int
        Behaves like PY2 ord() in PY2 or PY3
    if x is str of length > 1 or int > 256
        raises ValueError/TypeError is not SUPPRESS_ERRORS
    '''
    global _ord
    if isinstance(x, int):
        if x > 256:
            if not SUPPRESS_ERRORS:
                raise ValueError('ord() arg not in range(256)')
        return x % 256
    elif isinstance(x, bytes):
        x = fromBytes(x)
        if len(x) > 1:
            if SUPPRESS_ERRORS:
                x = x[0]
        return _ord(x)
    elif isinstance(x, str):
        if len(x) > 1:
            if SUPPRESS_ERRORS:
                x = x[0]
        return _ord(x)
    else:
        raise TypeError('Unknown type passed to ord: %s', str(type(x)))


def encode(x, encoding):
    return codecs.encode(x, encoding)


def decode(x, encoding):
    if isinstance(x, bytearray):
        x = bytes(x)
    return codecs.decode(x, encoding)


def hex(x):
    '''
    x-->bytes | bytearray
    Returns-->bytes: hex-encoded
    '''
    if isinstance(x, bytearray):
        x = bytes(x)
    return encode(x, 'hex')


def fromBytes(x):
    '''
    x-->unicode string | bytearray | bytes
    Returns-->unicode string, with encoding=latin1
    '''
    if isinstance(x, unicode):
        return x
    if isinstance(x, bytearray):
        x = bytes(x)
    elif isinstance(x, bytes):
        pass
    else:
        return x  # unchanged (int etc)
    return decode(x, DEF_ENCODING)


def toBytes(x):
    '''
    x-->unicode string | bytearray | bytes
    Returns-->bytes
    If x is unicode, MUST have encoding=latin1
    '''
    if isinstance(x, bytes):
        return x
    elif isinstance(x, bytearray):
        return bytes(x)
    elif isinstance(x, unicode):
        pass
    else:
        return x  # unchanged (int etc)
    # ASSUMES latin1 encoding - Could raise an exception
    return encode(x, DEF_ENCODING)


def _convInputs(func, f, *args, **kwargs):
    def wrapper(*args, **kwargs):
        def wrapped(*args, **kwargs):
            newargs = []
            for a in args:
                newargs += [f(a)]
            for (k, v) in kwargs.items():
                kwargs[k] = f(v)
            result = func(*newargs, **kwargs)
            return result
        return wrapped
    return wrapper()


def _convResults(func, f, *args, **kwargs):
    def wrapper(*args, **kwargs):
        def wrapped(*args, **kwargs):
            result = func(*args, **kwargs)
            if isinstance(result, tuple) or isinstance(result, list):
                newres = []
                for r in result:
                    newres += [f(r)]
            else:
                newres = f(result)
            return newres
        return wrapped
    return wrapper()


def inputFromBytes(func, *args, **kwargs):
    '''
    Decorator that converts all arguments to latin1-encoded unicode
    '''
    return _convInputs(func, fromBytes, *args, **kwargs)


def inputToBytes(func, *args, **kwargs):
    '''
    Decorator that converts all arguments to bytes
    '''
    return _convInputs(func, toBytes, *args, **kwargs)


def outputToBytes(func, *args, **kwargs):
    '''
    Decorator that converts all return values to bytes
    '''
    return _convResults(func, toBytes, *args, **kwargs)


def outputFromBytes(func, *args, **kwargs):
    '''
    Decorator that converts all return values to latin1-encoded unicode
    '''
    return _convResults(func, fromBytes, *args, **kwargs)


'''
The rest are ONLY for testing encode, decode, fromBytes, toBytes

************************************************************
These methods do NOT return cryptographically secure values
************************************************************

They are ONLY random enough for TESTING of the encoding / decoding
methods being tested
'''
import random
ENCODINGS = ['ascii', 'latin1', 'utf8', 'utf16', 'utf32']


def get_rand_int(encoding='latin1', avoid=[]):
    '''
    encoding-->str: one of ENCODINGS
    avoid-->list of int: to void (unprintable chars etc)
    Returns-->int that can be converted to requested encoding
              which is NOT in avoid
    '''
    UNICODE_LIMIT = 0x10ffff
    # See: https://en.wikipedia.org/wiki/UTF-8#Invalid_code_points
    SURROGATE_RANGE = (0xD800, 0xDFFF)
    if encoding not in ENCODINGS:
        raise ValueError('Unsupported encoding: ' + str(encoding))

    if encoding == 'ascii':
        maxord = 2 ** 7
    elif encoding == 'latin1':
        maxord = 2 ** 8
    elif encoding == 'utf16':
        maxord = 2 ** 16
    elif encoding == 'utf8':
        maxord = 2 ** 32
    elif encoding == 'utf32':
        maxord = 2 ** 32

    rndint = random.randrange(0, min(maxord, UNICODE_LIMIT))
    while (
        (rndint in avoid) or
        (SURROGATE_RANGE[0] <= rndint <= SURROGATE_RANGE[1])
    ):
        rndint = random.randrange(0, min(maxord, UNICODE_LIMIT))
    return rndint


def get_rand_str(encoding='latin1', l=64, avoid=[]):
    '''
    encoding-->str: one of ENCODINGS
    l-->int: length of returned str
    avoid-->list of int: to void (unprintable chars etc)
    Returns-->unicode str of the requested encoding
    '''
    ret = unicode('')
    while len(ret) < l:
        rndint = get_rand_int(encoding=encoding, avoid=avoid)
        ret += unichr(rndint)
    return ret


def get_rand_bytes(encoding='latin1', l=64, avoid=[]):
    '''
    encoding-->str: one of ENCODINGS
    l-->int: length of unicode str
    avoid-->list of int: to void (unprintable chars etc)
    Returns-->bytes representing unicode str of the requested encoding
    '''
    return encode(
        get_rand_str(encoding=encoding, l=l, avoid=avoid),
        encoding=encoding
    )
