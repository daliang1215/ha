'''
    sowrapper: Utility functions to locate and load shared libraries

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

    Recommended usage:

    Should only need to use get_lib_ffi_shared() or get_lib_ffi_resource()

    Use get_lib_ffi_shared to load a system-wide shared library with a known
    library filename and / or path

    Use get_lib_ffi_resource to load a module-specific shared library where
    library filename _MAY_ be mangled as per PEP3149 and path _MAY_ need to
    be looked up using pkg_resources. Internally, get_lib_ffi_resource()
    calls get_lib_ffi_shared()

    Both return a tuple: (ffi, lib):
        ffi-->FFIExt - should behave like cffi.FFI with some additional
                utility methods
        lib-->SharedLibWrapper instance - use methods on this object to
            call methods in the shared library
'''
import sys
import os
from pkg_resources import resource_filename
import sysconfig
from .py2to3 import PYPY
from .ffi import FFIExt


def get_lib_ffi_resource(module_name, libpath, c_hdr):
    '''
    module_name-->str: module name to retrieve resource
    libpath-->str: shared library filename with optional path
    c_hdr-->str: C-style header definitions for functions to wrap
    Returns-->(ffi, lib)

    Use this method when you are loading a package-specific shared library
    If you want to load a system-wide shared library, use get_lib_ffi_shared
    instead
    '''
    lib = SharedLibWrapper(libpath, c_hdr, module_name=module_name)
    ffi = lib.ffi
    return (ffi, lib)


def get_lib_ffi_shared(libpath, c_hdr):
    '''
    libpath-->str: shared library filename with optional path
    c_hdr-->str: C-style header definitions for functions to wrap
    Returns-->(ffi, lib)
    '''
    lib = SharedLibWrapper(libpath, c_hdr)
    ffi = lib.ffi
    return (ffi, lib)


class SharedLibWrapper(object):
    def __init__(self, libpath, c_hdr, module_name=None):
        '''
        libpath-->str: library name; can also be full path
        c_hdr-->str: C-style header definitions for functions to wrap
        ffi-->FFIExt or cffi.FFI
        '''
        self._libpath = libpath
        self._c_hdr = c_hdr
        self._module_name = module_name
        self.ffi = FFIExt()
        self.lib = None

        self.ffi.cdef(self._c_hdr)
        self._libloaded = False

    def load(self):
        '''
        Returns-->boolean: whether library could be loaded
        When this is called, the library would have been loaded if possible
        If this is not called, the first invocation of a method in lib
        CAN raise OSError if shared library cannot be loaded
        '''
        try:
            self.__openlib()
            return self.lib is not None
        except OSError:
            return False

    def __openlib(self):
        '''
        Actual (lazy) dlopen() only when an attribute is accessed
        '''
        if self.__getattribute__('_libloaded'):
            return
        libpath_list = self.__get_libres()
        for p in libpath_list:
            try:
                libres = resource_filename(self._module_name, p)
                self.lib = self.ffi.dlopen(libres)
                return
            except:
                continue
        # Try self._libpath if nothing in libpath_list worked - will work
        # only if self._module_name is set
        try:
            libres = resource_filename(self._module_name, self._libpath)
            self.lib = self.ffi.dlopen(libres)
        except:
            # If self._module_name is in sys.modules, try self._libpath
            # in the same dir as sys.modules[self._module_name].__file__
            # This is allows get_lib_ffi_shared to work in REPL
            try:
                # We set _libloaded to indicate all options have been tried
                self._libloaded = True

                libdir = ''
                if self._module_name is not None:
                    mod = sys.modules.get(self._module_name, None)
                    if mod is not None:
                        libdir = os.path.dirname(mod.__file__) or os.getcwd()

                libres = os.path.join(libdir, self._libpath)
                self.lib = self.ffi.dlopen(libres)
            except:
                return None

    def __getattr__(self, name):
        if not self.__getattribute__('_libloaded'):
            self.__openlib()
        if self.__getattribute__('lib') is not None:
            try:
                return getattr(self.lib, name)
            except AttributeError:
                return self.__getattribute__(name)
        else:
            return self.__getattribute__(name)

    def __get_libres(self):
        '''
        Computes libpath based on whether module_name is set or not
        Returns-->list of str lib paths to try

        PEP3140: ABI version tagged .so files:
            https://www.python.org/dev/peps/pep-3149/

        There's still one unexplained bit: pypy adds '-' + sys._multiarch()
        at the end (looks like 'x86_64-linux-gnu'), but neither py2 or py3 do

        Additionally, in older releases of pypy (e.g. build f3ad1e1e1d62
        Aug-28-2015), sysconfig.get_config_var('SOABI') returns '' but
        shared library still has '.pypy-26' in the name!

        So for pypy we try this this variant anyway!

        _I_ think Py2 and Py3 _MAY_ start adding sys._multiarch at some time

        So, we generate three forms:
            1. With sys._multiarch
            2. Without sys._multiarch
            3. libpath as-is - always tried by self.__openlib anyway
        For different versions we try in different order (for efficiency):
            Python2                 Python3                 Pypy

            2 --> 1 --> 3           2 --> 1 --> 3           1 --> 2 --> 3
        '''
        if self._module_name is None:
            return []
        ending = '.so'
        base = self._libpath.rsplit(ending, 1)[0]
        abi = sysconfig.get_config_var('SOABI')
        if abi is not None:
            abi = '.' + abi
        else:
            abi = ''

        multi_arch = sysconfig.get_config_var('MULTIARCH')
        if multi_arch is None:
            multi_arch = ''
        else:
            multi_arch = '-' + multi_arch

        if PYPY:
            n1 = base + abi + multi_arch + ending
            n2 = base + abi + ending
        else:
            n1 = base + abi + ending
            n2 = base + abi + multi_arch + ending
        if PYPY:
            n3 = base + '.pypy-26' + ending
            return [n1, n2, n3]
        else:
            return [n1, n2]

    def get_extension(self):
        return [self.ffi.verifier.get_extension()]
