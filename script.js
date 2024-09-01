function getComputerChoice() {
  let computerPick = Math.random();
  if (computerPick <= 0.33) {
    return console.log("Computer picked Rock!");
  } else if (computerPick >= 0.33 && computerPick >= 0.66) {
    return console.log("Computer picked Paper!");
  } else {
    return console.log("Computer picked scissors!");
  }
}

// Called the function a couple of times to determine if the logic is good

// getComputerChoice();
// getComputerChoice();
// getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Rock Paper Scissors?");
  if (humanChoice === "Rock") {
    return console.log("You picked Rock!");
  } else if (humanChoice === "Paper") {
    return console.log("You picked Paper!");
  } else if (humanChoice === "Scissors") {
    return console.log("You picked scissors!");
  } else {
    return console.log("Please pick a valid option.");
  }
}
