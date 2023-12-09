import { subtle } from "crypto";
import base58 from "./base58.js";

const uint8Array = new TextEncoder().encode(
  crypto.getRandomValues(new Uint8Array(512))
);

const base58Encoded = base58.encode(uint8Array);
const base58EncodedHex = base58.encodeHex(uint8Array);

console.log("# isBase58");
console.log(base58.isBase58(base58Encoded));
console.log("# isBase58Hex");
console.log(base58.isBase58Hex(base58EncodedHex));
const base58Decoded = base58.decode(base58Encoded);
const base58DecodedHex = base58.decodeHex(base58EncodedHex);

const string = new TextDecoder().decode(base58Decoded);
const string2 = new TextDecoder().decode(base58DecodedHex);

console.log("# output matches");
console.log(string === string2);

console.log("# can get type for base58");
let type = base58.whatType(base58Encoded);
console.log(type === "base58");

console.log("# can get type for base58Hex");
type = base58.whatType(base58EncodedHex);
console.log(type === "base58Hex");
