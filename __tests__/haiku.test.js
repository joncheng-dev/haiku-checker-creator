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
  test("checkValid method should say that a word with 3 characters has one syllable", () => {
    const threeLines = new Haiku("one");
    expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
  });
});
