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
  for (i = 0; i < 5; i++) {
    let computer = computerPlay();
    let player = playerSelection().toLowerCase();
    playRound(computer, player)
  }
}
