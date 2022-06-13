import Haiku from "./../src/haiku.js";

describe("Haiku", () => {
  test("should take in a parameter from user, and tell if it is a string", () => {
    const words = new Haiku("this is a string");
    expect(typeof words.line1).toEqual("string");
  });
});
