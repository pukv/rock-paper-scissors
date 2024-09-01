function getComputerChoice() {
  let computerPick = Math.random();
  if (computerPick <= 0.33) {
    return "Rock";
  } else if (computerPick <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock Paper Scissors?");
  // make the users input be case insensitive
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
  if (
    humanChoice === "Rock" ||
    humanChoice === "Paper" ||
    humanChoice === "Scissors"
  ) {
    return humanChoice;
  } else {
    alert("Please pick a valid option.");
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie. You both picked ${humanChoice}`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(
      `You picked ${humanChoice}, the Computer picked ${computerChoice}. You win.`
    );
    humanScore++;
  } else {
    console.log(
      `You picked ${humanChoice}, the Computer picked ${computerChoice}. The computer wins.`
    );
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`User wins: ${humanScore}`);
    console.log(`Computer wins: ${computerScore}`);
  }
}

playGame();
