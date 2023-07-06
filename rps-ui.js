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

function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randomIndex].toLowerCase();
  return computerChoice;
}
function getPlayerSelection(e) {
  if (e) {
    playerSelection = e.target.innerHTML.toLowerCase();
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "It's a tie, try again";
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
function scoreCount() {
  if (result.includes('You Win')) {
    playerScore++;
  } else if (result.includes('You lose')) {
    computerScore++;
  }
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function resetValues() {
  result = '';
  playerScore = 0;
  computerScore = 0;
  (async () => {
    await sleep(3000); // Sleep for 3000 milliseconds (3 seconds)
    resultTab.textContent = `Result: ${result}`;
    scoreCard.textContent = `Your Score : ${playerScore} || Computer Score: ${computerScore}`;
  })();
}

function startGame() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerSelection();
  playRound(playerSelection, computerSelection);
  scoreCount();
  if (playerScore == 5 || computerScore == 5) {
    (async () => {
      await sleep(500); // Sleep for 3000 milliseconds (3 seconds)
      resultTab.textContent = 'We have a winner !!!';
      resetValues();
    })();
  }

  resultTab.textContent = `Result: ${result}`;
  scoreCard.textContent = `Your Score : ${playerScore} || Computer Score: ${computerScore}`;
  return playerScore, computerScore;
}
