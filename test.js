import assert from "node:assert/strict";
import test from "node:test";
import base58 from "./base58.js";

const bytes = Uint8Array.of(0, 0, 1, 2, 255);

test("Base58 encoding preserves leading zero bytes", () => {
  const encoded = base58.encode(bytes);

  assert.equal(encoded, `11${base58.encode(Uint8Array.of(1, 2, 255))}`);
  assert.deepEqual(base58.decode(encoded), bytes);
  assert.equal(base58.isBase58(encoded), true);
  assert.equal(base58.whatType(encoded), "base58");
});

test("Base58Hex encoding preserves leading zero bytes", () => {
  const encoded = base58.encodeHex(bytes);

  assert.equal(encoded, `00${base58.encodeHex(Uint8Array.of(1, 2, 255))}`);
  assert.deepEqual(base58.decodeHex(encoded), bytes);
  assert.equal(base58.isBase58Hex(encoded), true);
  assert.equal(base58.whatType(encoded), "base58Hex");
});

test("empty values round-trip and remain valid", () => {
  assert.equal(base58.encode(new Uint8Array()), "");
  assert.deepEqual(base58.decode(""), new Uint8Array());
  assert.equal(base58.encodeHex(new Uint8Array()), "");
  assert.deepEqual(base58.decodeHex(""), new Uint8Array());
  assert.equal(base58.isBase58(""), true);
  assert.equal(base58.isBase58Hex(""), true);
  assert.equal(base58.whatType(""), "base58");
});

test("alphabet validation and type detection", () => {
  assert.equal(base58.isBase58("0"), false);
  assert.equal(base58.isBase58Hex("0"), true);
  assert.equal(base58.whatType("0"), "base58Hex");

  assert.equal(base58.isBase58("1"), true);
  assert.equal(base58.isBase58Hex("1"), true);
  assert.equal(base58.whatType("1"), "base58");

  for (const invalid of ["!", "é", "😀"]) {
    assert.equal(base58.isBase58(invalid), false);
    assert.equal(base58.isBase58Hex(invalid), false);
    assert.equal(base58.whatType(invalid), undefined);
  }
});

test("decoders reject characters outside their alphabets", () => {
  assert.throws(() => base58.decode("0"));
  assert.throws(() => base58.decodeHex("!"));
});

test("validation handles non-string input", () => {
  assert.equal(base58.isBase58(null), false);
  assert.equal(base58.isBase58Hex(undefined), false);
  assert.equal(base58.whatType(null), undefined);
});
