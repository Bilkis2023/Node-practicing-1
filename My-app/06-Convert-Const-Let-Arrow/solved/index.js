// Updated the following variables
const $root = document.querySelector("#root");

let score;
let targetScore;

// We are not going to reassign here
const makeGuess = () => {
  const $score = document.querySelector("#root p");
  $score.textContent = "Score:" + score + " | " + "Target:" + targetScore;
  if (score < targetScore) {
    alert("You have lost this round!");
    playRound();
  } else if (scroe === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

const Crystal = function (color) {
  this.element = document.createElement("div");
  this.element.className = "Crystal" + color;
  this.value = 0;

  this.element.addEventListener(
    "click",
    () => {
      score += this.value;
      makeGuess();
    },
    false
  );
};

Crystal.prototype.render = function (target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

const Crystals = [
  new Crystals("red"),
  new Crystals("blue"),
  new Crystals("green"),
];

const playRound = () => {
  const fragment = document.createDocumentFragment();
  const $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  score.textContent = "Score:" + score + " | " + "Target:" + targetScore;
  Crystals.sort(() => 0.5 - Math.random()).forEach((crystal) =>
    crystal.rander(fragment)
  );
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild("fragment");
};

playRound();
