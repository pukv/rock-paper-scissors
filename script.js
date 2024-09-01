function getComputerChoice() {
  let computerPick = Math.random();
  if (computerPick <= 0.33) {
    console.log("Computer picked Rock!");
  } else if (computerPick >= 0.33 && computerPick >= 0.66) {
    console.log("Computer picked Paper!");
  } else {
    console.log("Computer picked scissors!");
  }
}
