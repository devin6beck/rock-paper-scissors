
function computerPlay() {

  let random = Math.random();

  if (random <= 0.33) {
    return "rock"
  }

  else if (random <= 0.66) {
    return "paper"
  }

  else {
    return "scissors"
  }

  return play;
}

function playerSelection() {
  let answer = prompt("What do you choose?");
  return answer;
}

const computer = computerPlay();
console.log(`computer: ${computer}`)
const player = playerSelection().toLowerCase();
console.log(`player: ${player}`)

function playRound(computer, player) {
  console.log(computer);
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

console.log(playRound(computer, player));