// This script is game of rock paper scissors where a user plays the computer until one reaches a score of 5.
// The computerPlay() funcions chooses "rock", "paper", or "scissors" at random for the computer.
// The playerSelection() function prompts the user to choose "rock", "paper", or "scissors".
// The playRound() funtion returns a string telling who the winner of the round is or if it's a tie.
// The Game() funtion uses playRound() 5 times and returns a string telling who is the winner of the each round.
// Game() aslo displays the score after each round. If a score of 5 is reached the winner is displayed


// console.log(game());


let playerWins = 0;
let computerWins = 0;
let ties = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerWins < 5 && computerWins < 5) {

      const playerSelection = button.id;
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

      // show score
      document.getElementById("content").innerHTML = `Player score = ${playerWins}<br> Computer score = ${computerWins}<br> Ties = ${ties}`

      if (playerWins >= 5 || computerWins >= 5) {
        if (playerWins > computerWins) {
          document.getElementById("results").innerHTML = "You won the game! <br>"
        }
        else {
          document.getElementById("results").innerHTML = "You lost the game :( <br>" 
        }
        document.getElementById("results").innerHTML += "Refresh the page to play a new game."
      }
    }
  })
})


function computerPlay(){
  let options = ["rock", "paper", "scissors"];
  // Choose rock, paper, or scissors at random
  return options[Math.floor(Math.random()*options.length)];
}

function playRound(computer, player) {
  
  document.body.style.color = "white"

  if (computer == "rock" && player == "scissors") {
    return computerWonMessage(computer, player);
  }
  else if (computer == "paper" && player == "rock") {
    return computerWonMessage(computer, player);
  }
  else if (computer == "scissors" && player == "paper") {
    return computerWonMessage(computer, player);
  }
  else if (computer == player) {
    document.getElementById("results").innerHTML = `It's a tie!`
    return "tie"
  }
  else {
    document.getElementById("results").innerHTML = `You Win! ${player} beats ${computer}`
    return "player"
  }

  return "Somthing went wrong."
}

function computerWonMessage(computerSelection, playerSelection) {
  document.getElementById("results").innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`
  return "computer"
}
