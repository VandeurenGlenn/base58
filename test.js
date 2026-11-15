import assert from "node:assert/strict";
import test from "node:test";
import base58 from "./base58.js";

const bytes = Uint8Array.of(0, 0, 1, 2, 255);

test("Base58 encoding preserves leading zero bytes", () => {
  const encoded = base58.encode(bytes);

  assert.equal(encoded, `11${base58.encode(Uint8Array.of(1, 2, 255))}`);
  assert.deepEqual(base58.decode(encoded), bytes);
  assert.equal(base58.isBase58(encoded), true);
});

test("empty values round-trip and remain valid", () => {
  assert.equal(base58.encode(new Uint8Array()), "");
  assert.deepEqual(base58.decode(""), new Uint8Array());
  assert.equal(base58.isBase58(""), true);
});

test("alphabet validation rejects invalid characters", () => {
  assert.equal(base58.isBase58("1"), true);
  for (const invalid of ["!", "é", "😀"]) {
    assert.equal(base58.isBase58(invalid), false);
  }
});

test("decoder rejects characters outside the alphabet", () => {
  assert.throws(() => base58.decode("0"));
});

test("validation handles non-string input", () => {
  assert.equal(base58.isBase58(null), false);
});
