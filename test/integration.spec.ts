import { greeting } from "../src/greeting.js";

describe("`greeting` should", () => {
  describe("return a greeting message for a given User", () => {
    test("with name `Joe`", () => {
      const name = "Joe";
      const message = greeting({ name });
      expect(message).toBe(`Hello ${name} !`);
    });
  });
});
