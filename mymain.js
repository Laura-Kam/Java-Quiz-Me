console.log("hi here");
var startQuiz = document.getElementById("startQuiz");
var index;
var score;
var time;
var timer;

startQuiz.addEventListener("click", hideHomeContainer);

function hideHomeContainer() {
  console.log("clicked show question");
  var homeContainer = document.getElementById("home");
  if (homeContainer.style.display !== "none") {
    homeContainer.style.display = "none";
  }
}
