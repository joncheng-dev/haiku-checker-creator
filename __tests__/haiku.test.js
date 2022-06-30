import Haiku from "./../src/haiku.js";

// describe("Haiku", () => {
//   test("should take in all 3 parameters from user, and tell if they are all strings", () => {
//     const threeLines = new Haiku(
//       "this is a string",
//       "second line here",
//       "a third line"
//     );
//     expect(typeof threeLines.line1).toEqual("string");
//     expect(typeof threeLines.line2).toEqual("string");
//     expect(typeof threeLines.line3).toEqual("string");
//   });
//   test("checkValid method should say that a word with 4 characters has one syllable", () => {
//     const threeLines = new Haiku("four");
//     expect(threeLines.checkValid()).toEqual("I cannot answer that right now.");
//   });
//   test("checkValid method should say that a word with 3 characters has one syllable", () => {
//     const threeLines = new Haiku("one");
//     expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
//   });
//   test("checkValid method should say that a word with 2 characters has one syllable", () => {
//     const threeLines = new Haiku("to");
//     expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
//   });
//   test("checkValid method should say that a word with 1 characters has one syllable", () => {
//     const threeLines = new Haiku("a");
//     expect(threeLines.checkValid()).toEqual("Line 1 has one syllable.");
//   });
// });

describe("Haiku - support functions", () => {
  let threeLines;

  beforeEach(() => {
    threeLines = new Haiku(
      "this is a string",
      "second line here",
      "a third line"
    );
  });
  // TEST: Count all vowels.
  test("vowelCount should correctly return the number of vowels in a word", () => {
    const userEnteredWord = "early";
    expect(threeLines.vowelCount(userEnteredWord)).toEqual(3);
  });
  // TEST: Count syllables in a word.
  test("syllablesInWord should correctly return number of syllables -- 3 characters or less", () => {
    const userEnteredWord = "one";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(1);
  });
  test("syllablesInWord should correctly return number of syllables -- 3 characters or less", () => {
    const userEnteredWord = "eye";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(1);
  });
  test("syllablesInWord should correctly return number of syllables -- more than 3 characters", () => {
    const userEnteredWord = "test";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(1);
  });
  test("syllablesInWord should correctly return number of syllables -- more than 3 characters", () => {
    const userEnteredWord = "tape";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(1);
  });
  test("syllablesInWord should correctly return number of syllables -- more than 3 characters", () => {
    const userEnteredWord = "table";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(2);
  });
  test("syllablesInWord should correctly return number of syllables -- more than 3 characters", () => {
    const userEnteredWord = "thorough";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(2);
  });
  test("syllablesInWord should correctly return number of syllables -- more than 3 characters", () => {
    const userEnteredWord = "cyborg";
    expect(threeLines.syllablesInWord(userEnteredWord)).toEqual(2);
  });
});
