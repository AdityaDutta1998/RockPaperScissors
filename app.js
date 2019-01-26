var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";

}

function win(userChoice, computerChoice) {
  const smallUserWord = "(U)";
  const smallComputerWord = "(C)";
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallComputerWord}. You win! :D`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "(U)";
  const smallComputerWord = "(C)";
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses ${convert(computerChoice)}${smallComputerWord}. You lost :/`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "(U)";
  const smallComputerWord = "(C)";
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)}${smallUserWord} equals ${convert(computerChoice)}${smallComputerWord}. It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(function() { userChoice_div.classList.remove('grey-glow') }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
  game("r");
  })

  paper_div.addEventListener('click', function() {
  game("p");
  })

  scissors_div.addEventListener('click', function() {
  game("s");
  })
}

main();
