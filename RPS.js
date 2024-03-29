const buttons = document.querySelectorAll('button');
const scoreCard = document.querySelector('.score');
const resultTab = document.querySelector('.result');
buttons.forEach((button) =>
  button.addEventListener('click', getPlayerSelection)
);
buttons.forEach((button) => button.addEventListener('click', startGame));

let result = '';
let playerScore = 0;
let computerScore = 0;
// let playerSelection = '';

// startGame();
function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randomIndex].toLowerCase();
  console.log(computerChoice);
  return computerChoice;
}
function getPlayerSelection(e) {
  if (e) {
    playerSelection = e.target.innerHTML.toLowerCase();
  }
  console.log(playerSelection);
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "It's a tie, try Once more";
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      result = 'You Win!';
    } else {
      result = 'You lose!';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      result = 'You lose!';
    } else {
      result = 'You Win!';
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      result = 'You Win!';
    } else {
      result = 'You lose!';
    }
  } else {
    result = 'Enter a valid selection';
  }

  return result;
}

function startGame() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerSelection();
  playRound(playerSelection, computerSelection);
  console.log(result);
  if (result.includes('You Win')) {
    playerScore++;
  } else if (result.includes('You lose')) {
    computerScore++;
    // continue;
  }
  resultTab.textContent = `Result: ${result}`;
  scoreCard.textContent = `Score : ${playerScore}`;
  console.log({ playerScore, computerScore });
  return playerScore, computerScore;
}

// console.log(`Your score =  ${playerScore}`);
// console.log(`Computer score =  ${computerScore}`);
// if (playerScore == computerScore) {
//   console.log('Oh the Game is Tied!! Do you wanna play again ?');
// } else if (playerScore > computerScore) {
//   console.log('You are the winner');
// } else {
//   console.log('Computer is the winner');
// }
