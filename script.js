// This script is a 5 round game of rock paper scissors where a user plays the computer.
// The computerPlay() funcions chooses "rock", "paper", or "scissors" at random for the computer.
// The playerSelection() function prompts the user to choose "rock", "paper", or "scissors".
// The playRound() funtion returns a string telling who the winner of the round is or if it's a tie.
// The Game() funtion uses a for loop to call playRound() 5 times and returns a string telling
// who is the winner of the 5 round game or if it is a tie.


// console.log(game());




game();

function game() {

  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      let outcome = playRound(computerPlay(), playerSelection);

      switch (outcome) {
        case "computer":
          computerWins++;
          console.log("adsfasd computer one")
          console.log(computerWins)
          break;
        case "player":
          playerWins++;
          break;
        case "tie":
          ties++;
      }
      // display score so fare
      document.getElementById("content").innerHTML = `Player score = ${playerWins}<br> Computer score = ${computerWins}<br> Ties = ${ties}`

      if (playerWins >= 5 || computerWins >= 5) {
        if (playerWins > computerWins) {
          document.getElementById("content").innerHTML = "You won the game!"
        }
        else {
          document.getElementById("content").innerHTML = "You lost the game :("
        }
      }
    })
  })

  
}


// function game() {
//   const rockButton = document.getElementById("rock");
//   const paperButton = document.getElementById("paper");
//   const scissorsButton = document.getElementById("scissors");

//   let playerWins = 0;
//   let computerWins = 0;
//   let ties = 0;

//   while (playerWins < 5 || computerWins < 5) {
//     rockButton.addEventListener("click", () => {
//       let outcome = playRound(computerPlay(), "rock");
//       console.log(outcome);
//     });
    
//     paperButton.addEventListener("click", () => {
//       playRound(computerPlay(), "paper")
//     });
    
//     scissorsButton.addEventListener("click", () => {
//       playRound(computerPlay(), "scissors")
//     });
//   }
  

  
// }



function computerPlay(){
  let options = ["rock", "paper", "scissors"];
  // Choose rock, paper, or scissors at random
  return options[Math.floor(Math.random()*options.length)];
}

function playerSelection() {
  let answer = prompt("What do you choose?");
  return answer;
}

function playRound(computer, player) {
  if (computer == "rock" && player == "scissors") {
    document.getElementById("results").innerHTML = `You Lose! ${computer} beats ${player}`
    return "computer"
  }
  else if (computer == "paper" && player == "rock") {
    document.getElementById("results").innerHTML = `You Lose! ${computer} beats ${player}`
    return "computer"
  }
  else if (computer == "scissors" && player == "paper") {
    document.getElementById("results").innerHTML = `You Lose! ${computer} beats ${player}`
    return "computer"
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


// function game() {
//   let playerWins = 0;
//   let computerWins = 0;
//   let ties = 0;

//   for (i = 0; i < 5; i++) {
//     let computer = computerPlay();
//     let player = playerSelection().toLowerCase();
//     let outcome = playRound(computer, player);

//     switch (outcome) {
//       case "computer":
//         computerWins++;
//         break;
//       case "player":
//         playerWins++;
//         break;
//       case "tie":
//         ties++;
//     }
//   }
//   console.log(`Final score is computer: ${computerWins}, player: ${playerWins}, ties: ${ties}.`);
//   return displayWinner(playerWins, computerWins);
// }

function displayWinner(playerWins, computerWins) {
  if (playerWins > computerWins) {
    return "You beat the computer! :)"
  }
  else if (computerWins > playerWins) {
    return "The computer beat you! :("
  }
  else {
    return "It's a tie!"
  }
}
