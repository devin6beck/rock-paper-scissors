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
    return "You Lose! " + computer + " beats " + player;
  }

  else if (computer == "paper" && player == "rock") {
    return `You Lose! ${computer} beats ${player}`
  }

  else if (computer == "scissors" && player == "paper") {
    return `You Lose! ${computer} beats ${player}`
  }

  else if (computer == player) {
    return `It's a tie!`
  }

  else {
    return `You Win! ${player} beats ${computer}`
  }

  return "Somthing went wrong."
}


function game() {
  for (i = 0; i < 5; i++) {
    let computer = computerPlay();
    let player = playerSelection().toLowerCase();
    console.log(playRound(computer, player));
  }
}

function score()