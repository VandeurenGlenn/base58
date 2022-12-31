/**
 * a base58 encoded string
 * contains only 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 */
declare type base58String = string

/**
 * a base58 encoded hex string
 * contains only 0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijkmnopqrstuv
 */
declare type base58HexString = string

/**
 * 
 */
declare type base58Type = 'base58' | 'base58Hex' | undefined

declare module base58 {
  function encode(uint8Array: Uint8Array): base58String
  function decode(uint8Array: base58String): Uint8Array
  function isBase58(string: base58String): boolean
  function encodeHex(uint8Array: Uint8Array): base58String
  function decodeHex(uint8Array: base58String): Uint8Array
  function isBase58Hex(string: base58String): boolean
  /**
   * returns 'base58' | 'base58Hex' | undefined
   * @param string base58/base58Hex encoded string
   */
  function whatType(string: base58String | base58HexString): base58Type
}

declare module '@vandeurenglenn/base58' {
  export default base58
  export function encode(uint8Array: Uint8Array): base58String
  export function decode(uint8Array: base58String): Uint8Array
  export function isBase58(string: base58String): boolean
  export function encodeHex(uint8Array: Uint8Array): base58String
  export function decodeHex(uint8Array: base58String): Uint8Array
  export function isBase58Hex(string: base58String): boolean
  export function whatType(string: base58String | base58HexString): base58Type
}
