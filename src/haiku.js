export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkValid() {
    if (syllablesInWord(this.line1) === 1) {
      return "Line 1 has one syllable.";
    } else {
      return "I cannot answer that right now.";
    }
  }
}

function syllablesInWord(word) {
  // If there are 3 characters or less, this is 1 syllable.
  if (word.toLowerCase().length <= 3) {
    return 1;
  }
}

function countWords(sentence) {
  let separatedWords = sentence.split(" ");
  // Try taking the first word in this array..
  let word = separatedWords[0].replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, "");
  syllablesInWord(word);
}
