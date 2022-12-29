import base58 from './dist/base58.js'

const uint8Array = new TextEncoder().encode('hello')

const base58Encoded = base58.encode(uint8Array)
const base58EncodedHex = base58.encodeHex(uint8Array)

console.log(base58Encoded)
console.log(base58EncodedHex)
console.log(base58.isBase58(base58Encoded));
console.log(base58.isBase58(base58EncodedHex));
const base58Decoded = base58.decode(base58Encoded)
const base58DecodedHex = base58.decodeHex(base58EncodedHex)


const string = new TextDecoder().decode(base58Decoded)
const string2 = new TextDecoder().decode(base58DecodedHex)

console.log(string === string2)
