// TODO: Update the following variables on this file to the new
var $root = document.querySelector("#root");

var score;
var targetScore;

// TODO: Update this function to the array function
var makeGuess = function () {
  var $score = document.querySelector("#root p");
  $score.textContent = "Score:" + score + " | " + "Target:" + targetScore;
  if (score > targetScore) {
    alert("You have lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

// TODO: Does this function require arrow function?
var Crystal = function (color) {
  this.element = document.createElement("div");
  this.element.className = "Crystal" + color;
  this.value = 0;

  // TODO: Can we update this function to an array function?

  this.element.addEventListener(
    "click",
    function () {
      score += this.value;
      makeGuess();
    }.bind(this),
    false
  );
};
