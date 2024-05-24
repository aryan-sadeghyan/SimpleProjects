const userChoiceDisplay = document.getElementById("user-choice");
const computerChoicedisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const options = document.querySelectorAll("button");
let computerChoice;
let userchoice;
let result;

options.forEach((option) =>
  option.addEventListener("click", (e) => {
    userchoice = e.target.id;
    userChoiceDisplay.textContent = userchoice;
    random();
    showResult();
  })
);

function random() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "rock";
  }
  if (computerChoice === 2) {
    computerChoice = "paper";
  }
  if (computerChoice === 3) {
    computerChoice = "scissors";
  }
  computerChoicedisplay.textContent = computerChoice;
}

function showResult() {
  if (computerChoice === userchoice) {
    resultDisplay.textContent = "draw";
  }
  if (userchoice === "rock" && computerChoice === "paper") {
    result = "you lost!";
  }
  if (userchoice === "rock" && computerChoice === "scissors") {
    result = "you lost!";
  }
  if (userchoice === "paper" && computerChoice === "scissors") {
    result = "you won!";
  }
  if (userchoice === "paper" && computerChoice === "rock") {
    result = "you lost!";
  }
  if (userchoice === "scissors" && computerChoice === "paper") {
    result = "you lost!";
  }
  if (userchoice === "scissors" && computerChoice === "rock") {
    result = "you won!";
  }
  resultDisplay.textContent = result;
}
