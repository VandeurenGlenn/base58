const base58 = require('./dist/base58');

const uint8Array = new TextEncoder().encode('hi')

const base58Encoded = base58.encode(uint8Array)

console.log(base58Encoded)

const base58Decoded = base58.decode(base58Encoded)

const string = new TextDecoder().decode(base58Decoded)

console.log(string)
