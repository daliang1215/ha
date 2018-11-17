'''
    ffi.py: wrapper around cffi.FFI

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
'''
from cffi import FFI


class FFIExt(FFI):
    '''
    FFIExt is an extension of cffi.FFI, adding a few utility methods

    get_cdata(), get_buffer() and get_bytes() all operate on a variable
    list of arguments as a convenience.

    Otherwise, get_cdata() and get_buffer() are equivalent to
    FFI.from_buffer() and FFI.buffer() respectively

    get_bytes() is identical to get_buffer() except that outputs are
    converted to bytes
    '''
    def get_cdata(self, *args):
        '''
        all args-->_cffi_backend.buffer
        Returns-->cdata (if a SINGLE argument was provided)
                  LIST of cdata (if a args was a tuple or list)
        '''
        res = tuple([
            self.from_buffer(x) for x in args
        ])

        if len(res) == 0:
            return None
        elif len(res) == 1:
            return res[0]
        else:
            return res

    def get_buffer(self, *args):
        '''
        all args-->_cffi_backend.CDataOwn
        Must be a pointer or an array
        Returns-->buffer (if a SINGLE argument was provided)
                  LIST of buffer (if a args was a tuple or list)
        '''
        res = tuple([
            self.buffer(x) for x in args
        ])

        if len(res) == 0:
            return None
        elif len(res) == 1:
            return res[0]
        else:
            return res

    def get_bytes(self, *args):
        '''
        all args-->_cffi_backend.CDataOwn
        Must be a pointer or an array
        Returns-->bytes (if a SINGLE argument was provided)
                  LIST of bytes (if a args was a tuple or list)
        '''
        res = tuple([
            bytes(self.buffer(x)) for x in args
        ])

        if len(res) == 0:
            return None
        elif len(res) == 1:
            return res[0]
        else:
            return res

    def get_extension(self):
        return [self.verifier.get_extension()]
