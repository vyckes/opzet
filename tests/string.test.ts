import { test, expect } from "vitest";
import { string, validate } from "../src";

test("string - type & length", () => {
  expect(
    validate(
      { key1: "value", key2: "value", key3: 3 },
      {
        key1: [string.type, string.min(7), string.max(3)],
        key2: [string.type, string.min(3), string.max(10)],
        key3: [string.type, string.min(3), string.max(3)],
      },
    ),
  ).toEqual({
    key1: [
      { error: "min", description: 7 },
      { error: "max", description: 3 },
    ],
    key3: [{ error: "type" }],
  });
});

test("string - email", () => {
  expect(
    validate(
      { email1: "value", email2: "test@test.nl" },
      {
        email1: [string.type, string.email],
        email2: [string.type, string.email],
        email3: [string.type, string.email],
      },
    ),
  ).toEqual({
    email1: [{ error: "format", description: "email" }],
  });
});

test("string - url", () => {
  expect(
    validate(
      { url1: "value", url2: "https://example.com" },
      {
        url1: [string.type, string.url],
        url2: [string.type, string.url],
        url3: [string.type, string.url],
      },
    ),
  ).toEqual({ url1: [{ error: "format", description: "url" }] });
});

test("string - uuid", () => {
  expect(
    validate(
      { uuid1: "value", uuid2: "123e4567-e89b-12d3-a456-426614174000" },
      {
        uuid1: [string.type, string.uuid],
        uuid2: [string.type, string.uuid],
        uuid3: [string.type, string.uuid],
      },
    ),
  ).toEqual({
    uuid1: [{ error: "format", description: "uuid" }],
  });
});

test("string - iban", () => {
  expect(
    validate(
      {
        iban1: "NL18RABO0123459876",
        iban2: "NL18RABO0123459876",
        iban3: "NL18RABO0123459876",
        iban4: "test",
      },
      {
        iban1: [string.type, string.iban],
        iban2: [string.type, string.iban],
        iban3: [string.type, string.iban],
        iban4: [string.type, string.iban],
        iban5: [string.type, string.iban],
      },
    ),
  ).toEqual({
    iban4: [{ error: "format", description: "iban" }],
  });
});

test("string - enum", () => {
  expect(
    validate(
      { enum1: "value", enum2: "value" },
      {
        enum1: [string.type, string.enum(["non"])],
        enum2: [string.type, string.enum(["value"])],
        enum3: [string.type, string.enum(["value"])],
      },
    ),
  ).toEqual({
    enum1: [{ error: "enum", description: ["non"] }],
  });
});
