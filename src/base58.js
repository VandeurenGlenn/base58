import base from '@vandeurenglenn/base-x'

const base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

const decode = uint8Array => base(base58).decode(uint8Array)

export default {
  encode: uint8Array => base(base58).encode(uint8Array),
  decode,
  isBase58: uint8Array => {
    try {
      decode(uint8Array)
      return true
    } catch (e) {
      return false
    }
  }
}
