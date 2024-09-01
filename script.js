function getComputerChoice() {
  let computerPick = Math.random();
  if (computerPick <= 0.33) {
    return "Rock";
  } else if (computerPick >= 0.33 && computerPick >= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Called the function a couple of times to determine if the logic is good
// getComputerChoice();
// getComputerChoice();
// getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Rock Paper Scissors?");
  if (humanChoice === "Rock") {
    return "Rock";
  } else if (humanChoice === "Paper") {
    return "Paper";
  } else if (humanChoice === "Scissors") {
    return "Scissors";
  } else {
    return "Please pick a valid option.";
  }
}

// Called the function a couple of times to determine if the logic is good
// humanChoice();
// humanChoice();
// humanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Rock") {
    return console.log(
      "You picked Rock, the Computer picked Rock. It's a tie."
    );
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    return console.log(
      "You picked Rock, the Computer picked Paper. The Computer wins!"
    );
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    return console.log(
      "You picked Rock, the Computer picked Scissors. You win!"
    );
  }

  if (humanChoice === "Paper" && computerChoice === "Rock") {
    return console.log("You picked Paper, the Computer picked Rock. You win!");
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    return console.log(
      "You picked Paper, the Computer picked Paper. It's a tie."
    );
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    return console.log(
      "You picked Paper, the Computer picked Scissors. Computer wins!"
    );
  }

  if (humanChoice === "Scissors" && computerChoice === "Rock") {
    return console.log(
      "You picked Scissors, the Computer picked Rock. Computer wins!"
    );
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    return console.log(
      "You picked Scissors, the Computer picked Paper. You win!"
    );
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    return console.log(
      "You picked Scissors, the Computer picked Scissors. It's a tie."
    );
  }
}

playRound(getComputerChoice(), getHumanChoice());
