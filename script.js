// ----- PSEUDOCODE -----

// - Make a function that plays a single round of rock paper scissors (singleRound(playerSelection, computerSelection))
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// ---> return the result

// - Ask input playerSelection via prompt("Chose between rock  paper, scissors")
// ---> case insensitive + return the result

// - Make the computer randomly choose rock, paper or scissors (getComputerChoice())
// ---> return the result

let getComputerChoice = Math.floor(Math.random() * 3 + 1);

let computerSelection = () => {
  if (getComputerChoice === 1) {
    computerSelection = "rock";
    return computerSelection;
  } else if (getComputerChoice === 2) {
    computerSelection = "paper";
    return computerSelection;
  } else {
    computerSelection = "scissors";
    return computerSelection;
  }
};
console.log(computerSelection());
