declare module '@vandeurenglenn/base58' {
  export function encode(source: Uint8Array): string
  export function decode(source: string): Uint8Array
  export function isBase58(string: string): boolean
}
