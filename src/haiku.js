export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  // SEE if it's a valid Haiku.
  checkValid() {
    // Check all three lines for numbers of syllables
    // First line:
    if (syllablesInWord(this.line1) === 1) {
      return "Line 1 has one syllable.";
    } else {
      return "I cannot answer that right now.";
    }
  }

  // Counts vowels
  vowelCount(word) {
    const count = word.match(/[aeiouy]/gi).length;
    return count;
  }
}

// Break sentence into words. Store into an array. Input individually into
function countWords(sentence) {
  let separatedWords = sentence.split(" ");
  // Try taking the first word in this array..
  let word = separatedWords[0].replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, "");
  syllablesInWord(word);
}
