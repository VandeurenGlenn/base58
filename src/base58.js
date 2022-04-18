import base from '@vandeurenglenn/base-x'

const base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

export default {
  encode: uint8Array => base(base58).encode(uint8Array),
  decode: uint8Array => base(base58).decode(uint8Array)
}
