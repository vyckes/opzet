import { test, expect } from "vitest";
import { ERROR_CODES, number, validate } from "../src";

test("number rules", () => {
  const obj = { count: 0, string: "string" };

  expect(
    validate(obj, {
      count: [number.type, number.min(-1), number.max(3)],
      string: [number.type],
      count2: [number.type, number.min(-1), number.max(3)],
    }),
  ).toEqual({ string: ERROR_CODES.type });

  expect(
    validate(obj, { count: [number.type, number.min(1), number.max(-3)] }),
  ).toEqual({
    count: ERROR_CODES.number.min,
  });
  expect(validate(obj, { count: [number.type, number.max(-3)] })).toEqual({
    count: ERROR_CODES.number.max,
  });
});
