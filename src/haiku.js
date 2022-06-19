export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  // Check valid will see if it's a valid Haiku.
  checkValid() {
    // Check all three lines for numbers of syllables
    // First line:
    if (syllablesInWord(this.line1) === 1) {
      return "Line 1 has one syllable.";
    } else {
      return "I cannot answer that right now.";
    }
  }
}

// Counts syllables.
function syllablesInWord(word) {
  // If there are 3 characters or less, this is 1 syllable.
  if (word.toLowerCase().length <= 3) {
    return 1;
  }
  // If there are more than 3 characters, continue to check for syllables.
  // Check number of vowels.
  else if (word.toLowerCase().length > 3) {
    return "Number of vowels is " + vowelCount(word.toLowerCase());
  }
}

// Counts vowels
function vowelCount(word) {
  const count = word.match(/[aeiou]/gi).length;
  return count;
}

function countWords(sentence) {
  let separatedWords = sentence.split(" ");
  // Try taking the first word in this array..
  let word = separatedWords[0].replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, "");
  syllablesInWord(word);
}
