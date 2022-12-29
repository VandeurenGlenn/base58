/**
 * a base58 encoded string
 * contains only 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 */
declare type base58String = string

declare module base58 {
  export function encode(uint8Array: Uint8Array): base58String
  export function decode(uint8Array: base58String): Uint8Array
  export function isBase58(string: base58String): boolean
}

declare module '@vandeurenglenn/base58' {
  export default base58
  export function encode(uint8Array: Uint8Array): base58String
  export function decode(uint8Array: base58String): Uint8Array
  export function isBase58(string: base58String): boolean
  export function encodeHex(uint8Array: Uint8Array): base58String
  export function decodeHex(uint8Array: base58String): Uint8Array
  export function isBase58Hex(string: base58String): boolean
}
