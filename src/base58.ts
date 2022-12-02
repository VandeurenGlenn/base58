import baseX from '@vandeurenglenn/base-x'

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const base58 = baseX(ALPHABET)
const decode = (string: string): Uint8Array => base58.decode(string)

export default {
  encode: (uint8Array: Uint8Array): string => base58.encode(uint8Array),
  decode,
  isBase58: (string: string): boolean => {
    try {
      decode(string)
      return true
    } catch (e) {
      return false
    }
  }
}
