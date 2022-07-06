import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Haiku from "./haiku.js";

// User Interface Logic
$(document).ready(function () {
  $("#haiku-checker-form").submit(function (event) {
    event.preventDefault();
    const line1 = $("#line1").val();
    const line2 = $("#line2").val();
    const line3 = $("#line3").val();
    const haiku = new Haiku(line1, line2, line3);
    // TEST
    const haikuTest1 = haiku.checkValid();
    $("#haiku-result").append("<p>" + haikuTest1 + "</p>");

    const line1SeparatedWords = haiku.lineCharsOnly(line1);
    const line2SeparatedWords = haiku.lineCharsOnly(line2);
    const line3SeparatedWords = haiku.lineCharsOnly(line3);
    const result1 = haiku.lineTotalSyllables(line1SeparatedWords);
    const result2 = haiku.lineTotalSyllables(line2SeparatedWords);
    const result3 = haiku.lineTotalSyllables(line3SeparatedWords);
    // Line Syllables
    $("#result_line1").append("<td>" + 1 + "</td>");
    $("#result_line1").append("<td>" + line1 + "</td>");
    $("#result_line1").append("<td>" + result1 + "</td>");
    // Word Syllables
    for (let i = 0; i < line1SeparatedWords.length; i++) {
      $("#line1_word_syllables").append(
        "<tr><td>" +
          line1SeparatedWords[i] +
          "</td>" +
          "<td>" +
          haiku.syllablesInWord(line1SeparatedWords[i]) +
          "</td></tr>"
      );
    }
    // Line Syllables
    $("#result_line2").append("<td>" + 2 + "</td>");
    $("#result_line2").append("<td>" + line2 + "</td>");
    $("#result_line2").append("<td>" + result2 + "</td>");
    // Word Syllables
    for (let i = 0; i < line2SeparatedWords.length; i++) {
      $("#line2_word_syllables").append(
        "<tr><td>" +
          line2SeparatedWords[i] +
          "</td>" +
          "<td>" +
          haiku.syllablesInWord(line2SeparatedWords[i]) +
          "</td></tr>"
      );
    }
    // Line Syllables
    $("#result_line3").append("<td>" + 3 + "</td>");
    $("#result_line3").append("<td>" + line3 + "</td>");
    $("#result_line3").append("<td>" + result3 + "</td>");
    // Word Syllables
    for (let i = 0; i < line3SeparatedWords.length; i++) {
      $("#line3_word_syllables").append(
        "<tr><td>" +
          line3SeparatedWords[i] +
          "</td>" +
          "<td>" +
          haiku.syllablesInWord(line3SeparatedWords[i]) +
          "</td></tr>"
      );
    }
  });
});
