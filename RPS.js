function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let randomindex = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randomindex].toLowerCase();
  return computerChoice;
}
let result = "";
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(result);
function playRound(playerSelection, computerSelection) {
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
  } else {
    if (computerSelection == "rock") {
      result = "You Win! Paper covers Rock";
    } else {
      result = "You lose! Scissors cut paper";
    }
  }
  return result;
}
const playerSelection = prompt("Enter your Choice: ").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log(result);

// Pseudo-code:
// If playerselection == computerselection,then display "It's a tie, try Once more"
// Else
//  if playerselec = rock, then
//  if computerselec = scissor, display "{playerselec} beats {computerselec}, you Won!"
//  else, display "Shucks!, {computerselec} covers {playerselec} you loose!"
