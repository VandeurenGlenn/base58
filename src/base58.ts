import baseX from "@vandeurenglenn/base-x";

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const ALPHABET_HEX = "0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijklmnopqrstuv";

const base58 = baseX(ALPHABET);
const base58Hex = baseX(ALPHABET_HEX);
const ALPHABET_MAP = new Uint8Array(128);
const ALPHABET_HEX_MAP = new Uint8Array(128);

for (const character of ALPHABET) {
  ALPHABET_MAP[character.charCodeAt(0)] = 1;
}

for (const character of ALPHABET_HEX) {
  ALPHABET_HEX_MAP[character.charCodeAt(0)] = 1;
}

const isInAlphabet = (value: string, alphabetMap: Uint8Array): boolean => {
  if (typeof value !== "string") {
    return false;
  }

  for (let i = 0; i < value.length; i++) {
    if (alphabetMap[value.charCodeAt(i)] !== 1) {
      return false;
    }
  }

  return true;
};

export const encode = base58.encode;
export const decode = base58.decode;
export const encodeHex = base58Hex.encode;
export const decodeHex = base58Hex.decode;

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

export const isBase58 = (string: base58String): boolean =>
  isInAlphabet(string, ALPHABET_MAP);

export const isBase58Hex = (string: base58HexString): boolean =>
  isInAlphabet(string, ALPHABET_HEX_MAP);

export const whatType = (
  string: base58String | base58HexString
): base58Type => {
  if (isInAlphabet(string, ALPHABET_MAP)) {
    return "base58";
  }

  if (isInAlphabet(string, ALPHABET_HEX_MAP)) {
    return "base58Hex";
  }

  return;
};

export default {
  encode,
  decode,
  isBase58,
  isBase58Hex,
  encodeHex,
  decodeHex,
  whatType,
};
