/**
 * a base58 encoded string
 * contains only 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 */
declare type base58String = string

declare module '@vandeurenglenn/base58' {
  export function encode(source: Uint8Array): base58String
  export function decode(source: base58String): Uint8Array
  export function isBase58(string: base58String): boolean
}
