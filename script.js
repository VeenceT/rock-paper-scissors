// ----- GAME -----
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

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
      console.log(`----- Round ${i}/5 -----`);
      playerSelection = getPlayerSelection();
      computerSelection = getComputerSelection();

      // console.log(`player: ${playerSelection}, computer: ${computerSelection}`);

      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        console.log(
          `🟢 You win! ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
          } beats ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
          }!`
        );
        return (
          ++playerPoints, `You : ${playerPoints} - ${computerPoints} : Computer`
        );
      } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
      ) {
        console.log(
          `🔴 You loose! ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
          } beats ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
          }!`
        );
        return (
          ++computerPoints,
          `You : ${playerPoints} - ${computerPoints} : Computer`
        );
      } else {
        console.log(
          `🟠 Tie! You both played ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
          }!`
        );
        return (
          ++tiePoints, `You : ${playerPoints} - ${computerPoints} : Computer`
        );
      }
    };
    console.log(playRound());
  }
  if (playerPoints > computerPoints) {
    console.log(`🟢 Victory : ${playerPoints} - ${computerPoints} 🟢`);
  } else if (playerPoints < computerPoints) {
    console.log(`🔴 Defeat : ${playerPoints} - ${computerPoints} 🔴`);
  } else {
    console.log(`🟠 Tie : ${tiePoints} - ${tiePoints} 🟠`);
  }
};

game();
