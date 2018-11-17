'''
    Python wrapper around curve25519 by mehdi sotoodeh.
    The files under py25519/c  are from mehdi sotoodeh and are copied
    unchanged from https://github.com/msotoodeh/curve25519.

    The files under py25519/c are licensed under the MIT LICENSE (see
    license.txt file under py25519/c).

    All remaining files in this package are licensed under the GNU
    General Public License version 3 or (at your option) any later version.

    See the file LICENSE-GPLv3.txt for details of the GNU General Public
    License version 3.

    Copyright (C) 2016  Sundar Nagarajan

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
'''
from cffi_utils.py2to3 import inputToBytes
from cffi_utils.sowrapper import get_lib_ffi_resource
import os


c_hdr = '''
void ed25519_CreateKeyPair(
    unsigned char *pubKey,
    unsigned char *privKey,
    const void *blinding,
    const unsigned char *sk);
void ed25519_SignMessage(
    unsigned char *signature,
    const unsigned char *privKey,
    const void *blinding,
    const unsigned char *msg,
    size_t msg_size);
int ed25519_VerifySignature(
    const unsigned char *signature,
    const unsigned char *publicKey,
    const unsigned char *msg,
    size_t msg_size);
void curve25519_dh_CalculatePublicKey(
    unsigned char *pk,
    unsigned char *sk);
void curve25519_dh_CalculatePublicKey_fast(
    unsigned char *pk,
    unsigned char *sk);
void curve25519_dh_CreateSharedKey(
    unsigned char *shared,
    const unsigned char *pk,
    unsigned char *sk);
'''

module_name = 'py25519'
libpath = 'libcurve25519.so'

(ffi, lib) = get_lib_ffi_resource(
    module_name=module_name, libpath=libpath, c_hdr=c_hdr)

SECRETKEY_SIZE = 32
VERIFYINGKEY_SIZE = 32
SIGNINGKEY_SIZE = 64
SIGNATURE_SIZE = 64
PUBLICKEY_SIZE = 32
SHAREDKEY_SIZE = 32
C_VERIFYINGKEY = 'unsigned char[%d]' % (VERIFYINGKEY_SIZE,)
C_SIGNINGKEY = 'unsigned char[%d]' % (SIGNINGKEY_SIZE,)
C_SECRETKEY = 'unsigned char[%d]' % (SECRETKEY_SIZE,)
C_SIGNATURE = 'unsigned char[%d]' % (SIGNATURE_SIZE,)
C_PUBLICKEY = 'unsigned char[%d]' % (PUBLICKEY_SIZE,)
C_SHAREDKEY = 'unsigned char[%d]' % (SHAREDKEY_SIZE,)


class KeyTypeError(Exception):
    pass


class Key25519(object):
    def __init__(self, secretkey=None,
                 verifyingkey=None, pubkey=None):
        '''
        secretkey-->bytes[32]
        verifyingkey-->bytes[32]
        pubkey-->bytes[32]
        A PublicKey version of the object will have ONLY verifyingkey
        and pubkey and signingkey will be None
        A PrivateKey version of the object will have secretkey set
        and verifyingkey and pubkey are ignored and derived from secretkey

        Storing and reusing the secretkey is a way to recreate your key pair
        '''
        # PublicKey version
        if secretkey is None and (verifyingkey is not None and
                                  pubkey is not None):
            self.__secretkey = None
            self.__signingkey = None
            self.__verifyingkey = ffi.new(C_VERIFYINGKEY, verifyingkey)
            self.__pubkey = ffi.new(C_PUBLICKEY, pubkey)
            return
        # PrivateKey version - recreation
        if secretkey is not None:
            self.__secretkey = ffi.new(C_SECRETKEY, secretkey)
        # PrivateKey version - new object
        else:
            self.__secretkey = ffi.new(C_SECRETKEY,
                                       os.urandom(SECRETKEY_SIZE))
        # PrivateKey recreation or new but not PublicKey
        self.__verifyingkey = ffi.new(C_VERIFYINGKEY)
        self.__signingkey = ffi.new(C_SIGNINGKEY)
        lib.ed25519_CreateKeyPair(
            self.__verifyingkey,
            self.__signingkey,
            ffi.NULL,
            self.__secretkey)
        self.__pubkey = ffi.new(C_PUBLICKEY)
        # Copy because curve25519_dh_CalculatePublicKey_fast changes secretkey
        tmp_secretkey = ffi.new(C_SECRETKEY, self.secretkey)
        lib.curve25519_dh_CalculatePublicKey_fast(
            self.__pubkey, tmp_secretkey)
        del tmp_secretkey

    @inputToBytes
    def sign(self, msg):
        '''
        msg-->str or bytes
        Returns-->bytes
        '''
        if self.__signingkey is None:
            raise KeyTypeError('Wrong key type for operation')
        sig = ffi.new(C_SIGNATURE)
        lib.ed25519_SignMessage(
            sig, self.__signingkey, ffi.NULL, msg, len(msg))
        return ffi.get_bytes(sig)

    @inputToBytes
    def verify(self, sig, msg):
        '''
        sig-->bytes
        msg-->str or bytes
        Returns-->boolean
        '''
        return lib.ed25519_VerifySignature(
            sig, self.__verifyingkey, msg, len(msg)) == 1

    def get_ecdh_key(self, other):
        '''
        other-->Key25519 instance
        '''
        if self.__secretkey is None:
            raise KeyTypeError('Wrong key type for operation')
        # Copy because curve25519_dh_CreateSharedKey changes secretkey
        tmp_secretkey = ffi.new(C_SECRETKEY, self.secretkey)
        ecdh_key = ffi.new(C_SHAREDKEY)
        lib.curve25519_dh_CreateSharedKey(
            ecdh_key, other.pubkey, tmp_secretkey)
        del tmp_secretkey
        return ffi.get_bytes(ecdh_key)

    def public_key(self):
        '''
        Returns a PublicKey version of this object
        '''
        return Key25519(verifyingkey=self.verifyingkey,
                        pubkey=self.pubkey)

    @property
    def secretkey(self):
        if self.__secretkey is None:
            return None
        return ffi.get_bytes(self.__secretkey)

    @property
    def signingkey(self):
        if self.__signingkey is None:
            return None
        return ffi.get_bytes(self.__signingkey)

    @property
    def verifyingkey(self):
        if self.__verifyingkey is None:
            return None
        return ffi.get_bytes(self.__verifyingkey)

    @property
    def pubkey(self):
        if self.__pubkey is None:
            return None
        return ffi.get_bytes(self.__pubkey)

    def serialize(self):
        if self.__signingkey is None:
            return self.pubkey
        else:
            return self.secretkey

    def __eq__(self, other):
        attrs = ['secretkey', 'signingkey',
                 'verifyingkey', 'pubkey']
        a = [getattr(self, x, None) for x in attrs]
        b = [getattr(other, x, None) for x in attrs]
        return a == b


def selftest():
    '''
    Returns-->boolean
    '''
    msg = 'ABCD'

    # Key generation
    sk1 = Key25519()
    sk2 = Key25519()

    # Extract public_key
    pk1 = sk1.public_key()
    pk2 = sk2.public_key()

    if (pk1.secretkey, pk1.signingkey) != (None, None):
        raise ValueError('Public key contains secretkey or signingkey')
    if (pk2.secretkey, pk2.signingkey) != (None, None):
        raise ValueError('Public key contains secretkey or signingkey')

    # Sign and verify - positive test
    sig = sk1.sign(msg)
    if not pk1.verify(sig, msg):
        raise ValueError('Signature could not be verified')
    # Sign and verify - negative test
    if pk2.verify(sig, msg):
        raise ValueError('Signature verified unexpectedly')

    # ECDH key - positive test
    ecdh1 = sk1.get_ecdh_key(pk2)
    ecdh2 = sk2.get_ecdh_key(pk1)
    if (ecdh1 != ecdh2):
        raise ValueError('ECDH shared keys are different!')
    # ECDH key negative test
    sk3 = Key25519()
    ecdh3 = sk3.get_ecdh_key(pk1)
    if (ecdh1 == ecdh3 or ecdh2 == ecdh3):
        raise ValueError('ECDH keys unexpectedly equal')

selftest()
