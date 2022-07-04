export default class Haiku {
  constructor(line1) {
    this.line1 = line1;
  }

  // SEE if it's a valid Haiku.
  checkValid() {
    // Check all three lines for numbers of syllables
    // First line:
    if (syllablesInWord(this.line1) === 1) {
      return "Line 1 has one syllable. Not valid.";
    } else {
      return "I cannot answer that right now.";
    }
  }

  // Break line into words. Store into an array.
  lineCharsOnly(sentence) {
    let separatedWords = sentence.split(" ");
    // Take all words in this array..
    const noPunctuationLine = [];
    separatedWords.forEach((element) =>
      noPunctuationLine.push(
        element.replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, "")
      )
    );
    console.log("No punc: " + noPunctuationLine);
    return noPunctuationLine;
  }

  lineTotalSyllables(array) {
    // Takes an array, and tallies up syllables
    let tallyLineSyllables = 0;
    array.forEach(
      (element) => (tallyLineSyllables += this.syllablesInWord(element))
    );
    console.log("Line total syllables " + tallyLineSyllables);
    return tallyLineSyllables;
  }

  // Counts vowels
  vowelCount(word) {
    const count = word.match(/[aeiouy]/gi).length;
    return count;
  }

  // Counts syllables in word.
  syllablesInWord(word) {
    word = word.toLowerCase();
    // If there are 3 characters or less, this is 1 syllable.
    if (word.length <= 3) {
      return 1;
    }
    // If there are more than 3 characters, continue to check for syllables.
    // Check number of vowels.
    else if (word.length > 3) {
      let vowels = 0;
      vowels = this.vowelCount(word);
      // VOWEL SUBTRACTION RULES
      // If 'e' at the end of a word:
      if (word.substr(word.length - 1) === "e") {
        if (word.substr(word.length - 2) === "le") {
          vowels = vowels;
        } else {
          vowels = vowels - 1;
        }
      }
      // If a vowel follows another vowel.. subtract.
      let regex = /[aeiouy](?=[aeiouy])/g;
      const found = word.match(regex);
      if (word.match(regex)) {
        found.forEach((element) => (vowels = vowels - 1));
      }
      console.log(found);
      return vowels;
    }
  }
}
