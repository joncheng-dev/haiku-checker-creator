import Haiku from "./../src/haiku.js";

describe("Haiku", () => {
  test("should take in all 3 parameters from user, and tell if they are all strings", () => {
    const threeLines = new Haiku(
      "this is a string",
      "second line here",
      "a third line"
    );
    expect(typeof threeLines.line1).toEqual("string");
    expect(typeof threeLines.line2).toEqual("string");
    expect(typeof threeLines.line3).toEqual("string");
  });
});
