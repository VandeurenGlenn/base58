export declare const encode: (uint8Array: Uint8Array) => string;
export declare const decode: (string: string) => Uint8Array;
export declare const encodeHex: (uint8Array: Uint8Array) => string;
export declare const decodeHex: (string: string) => Uint8Array;
/**
 * a base58 encoded string
 * contains only 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 */
export type base58String = string;
/**
 * a base58 encoded hex string
 * contains only 0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijkmnopqrstuv
 */
export type base58HexString = string;
/**
 *
 */
export type base58Type = "base58" | "base58Hex" | undefined;
export declare const isBase58: (string: base58String) => boolean;
export declare const isBase58Hex: (string: base58HexString) => boolean;
export declare const whatType: (string: base58String | base58HexString) => base58Type;
declare const _default: {
    encode: (uint8Array: Uint8Array) => string;
    decode: (string: string) => Uint8Array;
    isBase58: (string: string) => boolean;
    isBase58Hex: (string: string) => boolean;
    encodeHex: (uint8Array: Uint8Array) => string;
    decodeHex: (string: string) => Uint8Array;
    whatType: (string: string) => base58Type;
};
export default _default;
