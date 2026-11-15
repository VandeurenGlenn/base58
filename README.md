# Base58

Encode and decode `Uint8Array` values using the Bitcoin Base58 alphabet.

## Usage

```js
import base58 from "@vandeurenglenn/base58";

const bytes = new TextEncoder().encode("hi");
const encoded = base58.encode(bytes);
console.log(encoded); // 8wr

const decoded = base58.decode(encoded);
console.log(new TextDecoder().decode(decoded)); // hi
```

## Validation

```js
base58.isBase58(encoded); // true
```
