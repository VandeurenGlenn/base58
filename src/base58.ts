import baseX from '@vandeurenglenn/base-x'

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const ALPHABET_HEX = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuv'

const base58 = baseX(ALPHABET)
const base58Hex = baseX(ALPHABET_HEX)

export const encode = base58.encode
export const decode = base58.decode
export const encodeHex = base58Hex.encode
export const decodeHex = base58Hex.decode

export const isBase58 = (string: base58String): boolean => {
  try {
    decode(string)
    return true
  } catch (e) {
    return false
  }
}
export default { encode, decode, isBase58, encodeHex, decodeHex }