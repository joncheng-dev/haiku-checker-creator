import Haiku from "./../src/haiku.js";

describe("Haiku class", () => {
  let threeLines;

  beforeEach(() => {
    threeLines = new Haiku(
      "this is a new string",
      "second line here",
      "a third line"
    );
  });
  test("should take in all 3 parameters from user, and tell if they are all strings", () => {
    expect(typeof threeLines.line1).toEqual("string");
    expect(typeof threeLines.line2).toEqual("string");
    expect(typeof threeLines.line3).toEqual("string");
  });
  test("should take in 3 parameters from user, and decide they fulfill the 5, 7, 5 syllable pattern", () => {
    expect(threeLines.checkValid()).toEqual("pass, no pass, no pass");
  });
  // test("should take in parameters from user, and reject if they contain numbers", () => {
  //   expect(threeLines.line1)
  // });
});

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
