# py25519
Python wrapper around curve25519 by mehdi sotoodeh.  The files under py25519/c  are from mehdi sotoodeh and are copied unchanged from https://github.com/msotoodeh/curve25519.

# LICENSE
The files under py25519/c are licensed under the MIT LICENSE (see license.txt file under py25519/c).

All remaining files in this package are licensed under the GNU General Public License version 3 or (at your option) any later version.

See the file LICENSE-GPLv3.txt for details of the GNU General Public License version 3.


# Class Documentation


	class Key25519(__builtin__.object)
		  __init__(self, secretkey=None, verifyingkey=None, pubkey=None)
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

		  get_ecdh_key(self, other)
		    '''
		      other-->Key25519 instance
		    '''

		  public_key(self)
		    '''
		      Returns a PublicKey version of this object
		    '''

		  selftest(self)
		    '''
		      Returns-->boolean
		    '''

		  serialize(self)

		  sign = wrapped(*args, **kwargs)

		  verify = wrapped(*args, **kwargs)

		  # ---------------------------------------------------------------------
		  # Properties (data descriptors)
		  # ---------------------------------------------------------------------

		  pubkey

		  secretkey

		  signingkey

		  verifyingkey

# Simple test
see py25519.test.py

	from py25519 import Key25519


	c = Key25519()
	print('secretkey: ', c.secretkey)
	print('signingkey: ', c.signingkey)
	print('verifyingkey: ', c.verifyingkey)

	msg = 'Hello world'
	badmsg = msg + '1'
	sig = c.sign(msg)
	badsig = c.sign(badmsg)
	print('good verify: ', c.verify(sig, msg))
	print('badmsg verify: ', c.verify(sig, badmsg))
	print('badsig verify: ', c.verify(badsig, msg))

	d = Key25519(secretkey=c.secretkey)
	print('----- d is a copy of c -----')
	print('d.verify: ', d.verify(sig, msg))
	print('c == d:', c == d)
	print('public(c) == public(d):', c.public_key() == d.public_key())
	print('c == public(d):', c == d.public_key())

	print('----- e is a new different key -----')
	e = Key25519()
	print('e.verify: ', e.verify(sig, msg))
	print('c == e:', c == e)
	print('public(c) == public(e):', c.public_key() == e.public_key())

	print('----- Test ECDH shared key -----')
	ecdh1 = c.get_ecdh_key(e.public_key())
	ecdh2 = e.get_ecdh_key(c.public_key())
	print('ecdh equal: ', ecdh1 == ecdh2)
	ecdh3 = e.get_ecdh_key(c.public_key())
	print('ecdh equal again: ', ecdh1 == ecdh3)
