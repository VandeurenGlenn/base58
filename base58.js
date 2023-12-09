import baseX from '@vandeurenglenn/base-x';

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const ALPHABET_HEX = "0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijklmnopqrstuv";
const base58 = baseX(ALPHABET);
const base58Hex = baseX(ALPHABET_HEX);
const encode = base58.encode;
const decode = base58.decode;
const encodeHex = base58Hex.encode;
const decodeHex = base58Hex.decode;
const isBase58 = (string) => {
    try {
        decode(string);
        return true;
    }
    catch (e) {
        return false;
    }
};
const isBase58Hex = (string) => {
    try {
        decodeHex(string);
        return true;
    }
    catch (e) {
        return false;
    }
};
const whatType = (string) => {
    try {
        decode(string);
        return "base58";
    }
    catch (e) {
        try {
            decodeHex(string);
            return "base58Hex";
        }
        catch {
            return;
        }
    }
};
var base58$1 = {
    encode,
    decode,
    isBase58,
    isBase58Hex,
    encodeHex,
    decodeHex,
    whatType,
};

export { decode, decodeHex, base58$1 as default, encode, encodeHex, isBase58, isBase58Hex, whatType };
