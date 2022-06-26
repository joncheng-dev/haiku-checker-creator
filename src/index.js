import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Haiku from "./haiku.js";

// TEMP BUSINESS LOGIC:
// Counts syllables in word.
function syllablesInWord(word) {
  word = word.toLowerCase();
  // If there are 3 characters or less, this is 1 syllable.
  if (word.length <= 3) {
    return 1;
  }
  // If there are more than 3 characters, continue to check for syllables.
  // Check number of vowels.
  else if (word.length > 3) {
    let vowels = 0;
    vowels = vowelCount(word);
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
    let regex = /[aeiou](?=[aeiou])/g;
    if (word.match(regex)) {
      vowels = vowels - 1;
    }
    return vowels;
  }
}

// Counts vowels
function vowelCount(word) {
  const count = word.match(/[aeiou]/gi).length;
  return count;
}

// User Interface Logic
$(document).ready(function () {
  // Add here
  $("#syllable-checker-form").submit(function (event) {
    event.preventDefault();
    const word1 = $("#word1").val();
    const syllableResult = syllablesInWord(word1);
    $("#syllable-checker-result").append("<p>" + syllableResult + "</p>");
  });
  $("#haiku-checker-form").submit(function (event) {
    event.preventDefault();
    const line1 = $("#line1").val();
    const line2 = $("#line2").val();
    const line3 = $("#line3").val();
    const haiku = new Haiku(line1, line2, line3);
    const result = haiku.checkValid();
    $("#haiku-check-result").append("<p>" + result + "</p>");
  });
});
