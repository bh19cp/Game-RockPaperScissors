const options = ['rock', 'paper', 'scissor'];
let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 0;

// Function to get computer's choice
function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    document.getElementById("computer-pick").textContent = `It's a tie, computer picked ${computerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    playerPoints++;
    document.getElementById("computer-pick").textContent = `You won, computer picked ${computerSelection}`;
  } else {
    computerPoints++;
    document.getElementById("computer-pick").textContent = `You lost , computer picked ${computerSelection}`;
  }
}

// Function to determine the winner
function gameOver() {
  if (playerPoints > computerPoints) {
    console.log('You won the game, froggy is in the pond!');

    window.location.href = "win.html";
    window.addEventListener('DOMContentLoaded', function(){
        document.getElementById("last").innerText = "YOU WON ! THANK YOU FOR YOUR HELP!";
    });
    
  } else if (playerPoints < computerPoints) {
    console.log( 'You lost the game, you can help froggy next time!');
    window.location.href = "win.html";
    window.addEventListener('DOMContentLoaded', function(){
        document.getElementById("last").innerText = "YOU LOST...";
    });

  } else {
    window.location.href = "win.html";
    window.addEventListener('DOMContentLoaded', function(){
        document.getElementById("last").innerText = "IT'S A TIE :/ THANK YOU FOR YOUR HELP!";
    });
    
  }
}

// Function to update the score display
function updateScore() {
  const playerScoreElement = document.getElementById('player');
  const computerScoreElement = document.getElementById('cpu');

  playerScoreElement.textContent = `PLAYER ${playerPoints}`;
  computerScoreElement.textContent = `COMPUTER ${computerPoints}`;
}

// Function to handle player's selection
function play(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateScore();
}

// Function to initialize the game
function game() {

    const optionsDiv = document.querySelectorAll('.options div');

    optionsDiv.forEach((option) => {
        option.addEventListener('click', function () {
            let playerSelection = option.getAttribute('id');
            play(playerSelection);
            roundCounter++;

            if(roundCounter > 4){
                gameOver();
                resetGame();
            }
        });
    });
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    updateScore();
    roundCounter = 0;
}
// Call the startGame function on window load
window.onload = game;
