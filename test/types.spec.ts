import { assertType, expectTypeOf } from "vitest";
import { greeting } from "../src/greeting.js";

describe("Type checking `greeting`", () => {
  test("should accept a { name: string } as parameter", () => {
    expectTypeOf(greeting).toBeFunction;
    expectTypeOf(greeting).parameter(0).toMatchTypeOf<{ name: string }>();

    assertType(greeting({ name: "Joe" }));
  });
});
