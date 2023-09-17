// --- PSEUDOCODE ---

// - Make a function that plays a single round of rock paper scissors (singleRound(playerSelection, computerSelection))
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// ---> return the result

// - Ask input playerSelection via prompt("Chose between Rock, Paper & Scissors")
// ---> case insensitive + return the result

// - Make the computer randomly choose rock, paper or scissors (getComputerChoice())
// ---> return the result

let game = () => {
  for (let i = 1; i <= 5; i++) {
    // ----- COMPUTER SELECTION -----
    let getComputerSelection = () => {
      let getComputerChoice = Math.floor(Math.random() * 3 + 1);

      if (getComputerChoice === 1) {
        let computerSelection = "rock";
        return computerSelection;
      } else if (getComputerChoice === 2) {
        let computerSelection = "paper";
        return computerSelection;
      } else {
        let computerSelection = "scissors";
        return computerSelection;
      }
    };
    // console.log(getComputerSelection());

    // ----- PLAYER SELECTION -----
    let getPlayerSelection = () => {
      let getPlayerInput = prompt("Choose between Rock, Paper & Scissors");
      let playerSelection = getPlayerInput.toLowerCase();
      return playerSelection;
    };
    // console.log(getPlayerSelection());

    // ----- SINGLE ROUND -----
    let playRound = (playerSelection, computerSelection) => {
      console.log(`----- Game ${i}/5 -----`);
      playerSelection = getPlayerSelection();
      computerSelection = getComputerSelection();

      console.log(`player: ${playerSelection}, computer: ${computerSelection}`);

      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return `🟢 You win, ${playerSelection} beats ${computerSelection}!`;
      } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
      ) {
        return `🔴 You loose, ${computerSelection} beats ${playerSelection}!`;
      } else {
        return `🟠 Tie, you both played ${playerSelection}`;
      }
    };
    console.log(playRound());
  }
};
game();
