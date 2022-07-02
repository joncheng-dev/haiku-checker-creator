import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Haiku from "./haiku.js";

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
    console.log(line1);
    // const line2 = $("#line2").val();
    // const line3 = $("#line3").val();
    const haiku = new Haiku(line1);
    // const result = haiku.checkValid();
    const result = haiku.syllablesInLine(line1);
    // To Do
    $("#result_line1").append("<td>" + 1 + "</td>");
    $("#result_line1").append("<td>" + line1 + "</td>");
    $("#result_line1").append("<td>" + result + "</td>");
  });
});
