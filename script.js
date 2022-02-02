// console.log("computerPlay returns: " + computerPlay())


// function computerPlay() {

//   let random = Math.random();

//   if (random <= 0.33) {
//     return "rock"
//   }

//   else if (random <= 0.66) {
//     return "paper"
//   }

//   else {
//     return "scissors"
//   }

//   return play;
// }


game();

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
    console.log(`You Lose! ${computer} beats ${player}`)
    return "computer"
  }

  else if (computer == "paper" && player == "rock") {
    console.log(`You Lose! ${computer} beats ${player}`)
    return "computer"
  }

  else if (computer == "scissors" && player == "paper") {
    console.log(`You Lose! ${computer} beats ${player}`)
    return "computer"
  }

  else if (computer == player) {
    console.log(`It's a tie!`)
    return "tie"
  }

  else {
    console.log(`You Win! ${player} beats ${computer}`)
    return "player"
  }

  return "Somthing went wrong."
}


function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  for (i = 0; i < 5; i++) {
    let computer = computerPlay();
    let player = playerSelection().toLowerCase();
    let outcome = playRound(computer, player);

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
    console.log(`Current score: computer = ${computerWins} player = ${playerWins} ties = ${ties}`)
  }

  console.log(`Final score is computer: ${computerWins} player: ${playerWins} ties: ${ties}`)
}