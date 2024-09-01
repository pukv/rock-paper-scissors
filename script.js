function getComputerChoice() {
  let computerPick = Math.random(); // as there are 3 possible choices, the number 1 will be divided into 3 equal parts
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
  // Make the user input not case sensitive
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
  if (
    humanChoice === "Rock" ||
    humanChoice === "Paper" ||
    humanChoice === "Scissors"
  ) {
    return humanChoice;
  } else {
    alert("Please pick a valid option."); // Prompt if the user enters something like 'stone' or any other word that's not legit
    return getHumanChoice();
  }
}

// Variables that store the score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie. You both picked ${humanChoice}`);
  } else if (
    // Conditions in which the user wins the game
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(
      `You picked ${humanChoice}, the Computer picked ${computerChoice}. You win.`
    );
    humanScore++; // Increments the user score by +1
  } else {
    console.log(
      `You picked ${humanChoice}, the Computer picked ${computerChoice}. The computer wins.`
    );
    computerScore++; // Increments the computer score by +1
  }
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`User wins: ${humanScore}`);
    console.log(`Computer wins: ${computerScore}`);
  }
}

playGame();
