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
  test("checkValid method should say that a word with 4 characters has one syllable", () => {
    const threeLines = new Haiku("four");
    expect(threeLines.checkValid()).toEqual("I cannot answer that right now.");
  });
  test("checkValid method should say that a word with 3 characters has one syllable", () => {
    const threeLines = new Haiku("one");
    expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
  });
  test("checkValid method should say that a word with 2 characters has one syllable", () => {
    const threeLines = new Haiku("to");
    expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
  });
  test("checkValid method should say that a word with 1 characters has one syllable", () => {
    const threeLines = new Haiku("a");
    expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
  });
  test("vowelCount function should correctly return the number of vowels in a word", () => {
    const threeLines = new Haiku(
      "this is a string",
      "second line here",
      "a third line"
    );
    const userEnteredWord = "early";
    expect(threeLines.vowelCount(userEnteredWord)).toEqual(3);
  });
});
