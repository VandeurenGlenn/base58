# Base58

Encode and decode `Uint8Array` values using the Bitcoin Base58 alphabet or the
package's custom alphabet.

## Usage

```js
import base58 from "@vandeurenglenn/base58";

const bytes = new TextEncoder().encode("hi");
const encoded = base58.encode(bytes);
console.log(encoded); // 8wr

const decoded = base58.decode(encoded);
console.log(new TextDecoder().decode(decoded)); // hi
```

## Base58Hex (custom Base52 alphabet)

The API calls this variant Base58Hex, but its alphabet,
`0123456789ABCDEFGHJKLMNPQRSTUVabcdefghijklmnopqrstuv`, has 52 characters.
It is therefore technically a Base52 encoding, not standard Base58. It still
encodes and decodes bytes; it does not convert hexadecimal strings.

```js
const encodedHex = base58.encodeHex(bytes);
const decodedHex = base58.decodeHex(encodedHex);
```

## Validation

```js
base58.isBase58(encoded); // true
base58.isBase58Hex(encodedHex); // true
base58.whatType(encoded); // "base58", "base58Hex", or undefined
```

`whatType` checks Base58 first. If a string belongs to both alphabets, it
returns `"base58"`.
