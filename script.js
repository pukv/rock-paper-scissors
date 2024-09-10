container = document.querySelector(".container");
resultDiv = document.createElement("div");
container.appendChild(resultDiv);

let playerWins = 0;
let computerWins = 0;

humanScore = document.createElement("p");
computerScore = document.createElement("p");
resultDiv.appendChild(humanScore);
resultDiv.appendChild(computerScore);

resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Score";
resetBtn.classList.add("reset-button");
container.appendChild(resetBtn);

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

rockBtn = document.querySelector(".rock");
paperBtn = document.querySelector(".paper");
scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("Rock", computerChoice);
});

paperBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("Paper", computerChoice);
});

scissorsBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("Scissors", computerChoice);
});

roundResult = document.createElement("p");
resultDiv.appendChild(roundResult);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie. You both picked ${humanChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundResult.textContent = `You picked ${humanChoice}, the Computer picked ${computerChoice}. You win.`;
    playerWins++;
    humanScore.textContent = `Player wins: ${playerWins}`;
    computerScore.textContent = `Computer wins: ${computerWins}`;
  } else {
    roundResult.textContent = `You picked ${humanChoice}, the Computer picked ${computerChoice}. The computer wins.`;
    computerWins++;
    computerScore.textContent = `Computer wins: ${computerWins}`;
    humanScore.textContent = `Player wins: ${playerWins}`;
  }
}

resetBtn.addEventListener("click", () => {
  playerWins = 0;
  computerWins = 0;
  humanScore.textContent = `Player wins: ${playerWins}`;
  computerScore.textContent = `Computer wins: ${computerWins}`;
});
