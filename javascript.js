//finding the question in each page

//targets question
var question = document.querySelector("question");

var nextButton = document.getElementById("next-button");

//targets the array (list) of options
var choices = Array.from(document.querySelectorAll(".btn-option"));

//targets the score
var scoreText = document.querySelector("#score");

let presentQuestion = {};
let CorrectAnswer = true;
let score = 0;
let questionNumber = 0;
let possibleQuestions = {};

let questions = [
  {
    question: "Commonly used data types do NOT include",
    option1: "strings",
    option2: "booleans",
    option3: "alerts",
    option4: "numbers",
    answer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed with",
    option1: "commas",
    option2: "curly brackets",
    option3: "quotes",
    option4: "parenthesis",
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store",
    option1: "numbers and strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "all of the above",
    answer: 4,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    option1: "JavaScript",
    option2: "Terminal/bash",
    option3: "for loops",
    option4: "console.log",
    answer: 4,
  },
];

function makeQuestionsAppear() {}

function showResults() {}

makeQuestionsAppear();

nextButton.addEventListener("click", showResults);

/* GIVEN I am taking a code quiz
WHEN I click the next button- a new set of questions appears/*/

/* WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */
