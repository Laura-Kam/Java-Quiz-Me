
var startQuiz = document.getElementById("startQuiz");
var index;
var score;
var time;
var timer;
var questions;
var submit = document.getElementById("submit-btn");
var quizContainer = document.getElementById('quiz-container');

generateQuiz(questions, quizContainer, submit);

startQuiz.addEventListener("click", hideHomeContainer);

function hideHomeContainer() {
  console.log("clicked show question");
  var homeContainer = document.getElementById("home");
  if (homeContainer.style.display !== "none") {
    homeContainer.style.display = "none";
  }
}

var questions = [
	{
		question: "The condition in an if/else statement is enclosed with",
		answers: {
			a: 'commas',
			b: 'curly brackets',
			c: 'quotes'
      d: 'parenthesis'
		},
		correctAnswer: 'd'
	},
	{
		question: "Arrays in Javascript can be used to store",
		answers: {
			a: 'numbers and strings',
			b: 'other arrays',
			c: 'booleans'
      d: 'all of the above'
		},
		correctAnswer: 'd'
	}
];
