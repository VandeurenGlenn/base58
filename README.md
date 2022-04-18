# bs32

module compatible base58

## Usage

``` js
const base58 = require('@vandeurenglenn/base58')
// or
import base58 from '@vandeurenglenn/base58'

const uint8Array = new TextEncoder().encode('hi')

const base58Encoded = base58.encode(uint8Array)

console.log(base58Encoded) // 8wr

const base58Decoded = base58.decode(base58Encoded)

const string = new TextDecoder().decode(base58Decoded)

console.log(string) // hi

```
