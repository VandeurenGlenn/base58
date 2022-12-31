import baseX from '@vandeurenglenn/base-x'

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const ALPHABET_HEX = '0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijklmnopqrstuv'

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

export const isBase58Hex = (string: base58HexString): boolean => {
  try {
    decodeHex(string)
    return true
  } catch (e) {
    return false
  }
}

export const whatType = (string: base58String | base58HexString): base58Type => {
  try {
    decode(string)
    return 'base58'
  } catch (e) {
    try {
      decodeHex(string)
      return 'base58Hex'
    } catch {
      return
    }
    
  }
}

export default { encode, decode, isBase58, isBase58Hex, encodeHex, decodeHex, whatType }