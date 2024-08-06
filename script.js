let userScore = 0;
let computerScore = 0;
var userChoice;
var computerChoice;

document.getElementById('rock').addEventListener('click', () => playGame('ROCK'));
document.getElementById('paper').addEventListener('click', () => playGame('PAPER'));
document.getElementById('scissors').addEventListener('click', () => playGame('SCISSORS'));


function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result, userChoice, computerChoice);
  updateScoreboard(result);
}


function getComputerChoice() {
    const randomNumber = Math.random().toFixed(2);
    if (randomNumber < 0.34) return 'ROCK';
    if (randomNumber < 0.67) return 'PAPER';
    return 'SCISSORS';
  }


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return 'It\'s a tie!';
  if ((userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
      (userChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
    return 'You win!';
  }
  return 'You lose!';
}

function displayResult(result, userChoice, computerChoice) {
  const resultText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  document.getElementById('result').textContent = resultText;


  document.getElementById('userChoice').textContent = userChoice;
  document.getElementById('computerChoice').textContent = computerChoice;


}

function updateScoreboard(result) {
  if (result === 'You win!') {
    userScore++;
  } else if (result === 'You lose!') {
    computerScore++;
  }
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;
}
