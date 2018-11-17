from . import Key25519


if __name__ == '__main__':
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
