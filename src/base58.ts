import baseX from '@vandeurenglenn/base-x'

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const base58 = baseX(ALPHABET)

export const encode = base58.encode
export const decode = base58.decode
export const isBase58 = (string: base58String): boolean => {
  try {
    decode(string)
    return true
  } catch (e) {
    return false
  }
}

export default { encode, decode, isBase58 }