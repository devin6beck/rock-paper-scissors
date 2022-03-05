// This script is game of rock paper scissors where a user plays the computer until one reaches a score of 5.
// The computerPlay() funcions chooses "rock", "paper", or "scissors" at random for the computer.
// The playerSelection() function prompts the user to choose "rock", "paper", or "scissors".
// The playRound() funtion returns a string telling who the winner of the round is or if it's a tie.
// The Game() funtion uses playRound() 5 times and returns a string telling who is the winner of the each round.
// Game() aslo displays the score after each round. If a score of 5 is reached the winner is displayed



let playerWins = 0;
let computerWins = 0;
let ties = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // as long as playerWins and computerWins are less than 5 then a round
    // of rock paper scissors is played
    if (playerWins < 5 && computerWins < 5) {

      // set playerSelection to either "rock", "paper", or "scissors"
      const playerSelection = button.id;

      // outcome is either "computer", "player", or "tie"
      let outcome = playRound(computerPlay(), playerSelection);

      switch (outcome) {
        case "computer":
          computerWins++;
          break;
        case "player":
          playerWins++;
          break;
        case "tie":
          ties++;
      }

      // Once the computer or player has 5 points a message is displayed telling
      // who is the winner and to refresh the page to play agin
      if (playerWins >= 5 || computerWins >= 5) {
        if (playerWins > computerWins) {
          document.getElementById("results").innerHTML = "You won the game! <br>"
        }
        else {
          document.getElementById("results").innerHTML = "You lost the game :( <br>" 
        }
        document.getElementById("results").innerHTML +=
         "Refresh the page to play a new game."
      }

      // show score
      document.getElementById("content").innerHTML =
       `Player score = ${playerWins}<br>
        Computer score = ${computerWins}<br>
        Ties = ${ties}`
    }
  })
})

// picks rock, paper, or scissors at random for the computer
function computerPlay(){
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random()*options.length)];
}

// plays a round of rock paper scissors and returns "computer", "player", or "tie".
// parameters must be "rock", "paper", or "scissors"
function playRound(computer, player) {
  
  

  if (computer == "rock" && player == "scissors") {
    return computerWon(computer, player);
  }
  else if (computer == "paper" && player == "rock") {
    return computerWon(computer, player);
  }
  else if (computer == "scissors" && player == "paper") {
    return computerWon(computer, player);
  }
  else if (computer == player) {
    document.getElementById("results").innerHTML = `It's a tie!`
    return "tie"
  }
  else {
    document.getElementById("results").innerHTML = `You Win! ${player} beats ${computer}`
    return "player"
  }
}

// Shows a losing message and returns "computer"
function computerWon(computerSelection, playerSelection) {
  document.getElementById("results").innerHTML =
   `You Lose! ${computerSelection} beats ${playerSelection}`
  return "computer"
}
