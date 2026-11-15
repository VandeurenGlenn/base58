import baseX from "@vandeurenglenn/base-x";

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const base58 = baseX(ALPHABET);
const ALPHABET_MAP = new Uint8Array(128);

for (const character of ALPHABET) {
  ALPHABET_MAP[character.charCodeAt(0)] = 1;
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

/**
 * a base58 encoded string
 * contains only 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 */
export type base58String = string;

export const isBase58 = (string: base58String): boolean =>
  isInAlphabet(string, ALPHABET_MAP);

export default {
  encode,
  decode,
  isBase58,
};
