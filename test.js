import base58 from './dist/base58.js'

const uint8Array = new TextEncoder().encode('hi')

const base58Encoded = base58.encode(uint8Array)

console.log(base58Encoded)
console.log(base58.isBase58(base58Encoded));
const base58Decoded = base58.decode(base58Encoded)

const string = new TextDecoder().decode(base58Decoded)

console.log(string)
