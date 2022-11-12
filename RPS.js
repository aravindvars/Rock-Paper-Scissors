let result = "";
let playerScore = 0;
let computerScore = 0;
startGame();
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let randomIndex = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randomIndex].toLowerCase();
  return computerChoice;
}
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(result);
function playRound(playerSelection, computerSelection) {
  // takes in two paramters: player and computer selection
  if (playerSelection == computerSelection) {
    result = "It's a tie, try Once more";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissor") {
      result = "You Win! Rock beats Scissors!";
    } else {
      result = "You lose! Paper covers Rock";
    }
  } else if (playerSelection == "scissor") {
    if (computerSelection == "rock") {
      result = "You lose! Rock beats Scissors";
    } else {
      result = "You Win! Scissors cut paper";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You Win! Paper covers Rock";
    } else {
      result = "You lose! Scissors cut paper";
    }
  } else {
    result = "Enter a valid selection";
  }
  return result;
}

// playRound(playerSelection, computerSelection);
//console.log(result);

function startGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your Choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("You Win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
      // continue;
    }
  }
  return playerScore, computerScore;
}

console.log(`Your score =  ${playerScore}`);
console.log(`Computer score =  ${computerScore}`);
if (playerScore == computerScore) {
  console.log("Oh the Game is Tied!! Do you wanna play again ?");
} else if (playerScore >= computerScore) {
  console.log("You are the winner");
} else {
  console.log("Computer is the winner");
}
// Pseudo-code:
// If playerselection == computerselection,then display "It's a tie, try Once more"
// Else
//  if playerselec = rock, then
//  if computerselec = scissor, display "{playerselec} beats {computerselec}, you Won!"
//  else, display "Shucks!, {computerselec} covers {playerselec} you loose!"

// if result.cotains("you win")
// player score ++
// else computerscore ++
