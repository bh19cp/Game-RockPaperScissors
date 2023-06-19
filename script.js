const options = ['rock', 'paper', 'scissor'];
let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 1;

const gamediv = document.querySelector(".game");


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
  gamediv.remove();

  let endMessage = document.createElement("div");
  endMessage.className = "endMessage";

  let winning = document.createElement("h3");

  if (playerPoints > computerPoints)
    winning.innerHTML = "YOU WON! FROGGY IS BACK IN THE POND";
  else if (playerPoints < computerPoints)
    winning.innerHTML = "YOU LOST ...";
  else winning.innerHTML = "IT'S A TIE. MAYBE NEXT TIME...";

  endMessage.innerHTML = "<h3> Feel like saving another <span id='froggy'>froggy</span>? </h3>";
  endMessage.prepend(winning);
  let buttons = document.createElement("div");
  buttons.innerHTML = "<a href='index.html'><p> YES, I AM THE FROG SAVIOUR</p></a><a href='https://youtu.be/wbr5vkIo4K8'><p> NOOOO, I HAVE STUFF TO DO</p></a>";
  buttons.className = "continuePlayingBtn";
  endMessage.append(buttons);
  document.querySelector(".console").append(endMessage);
  console.log(document.querySelector(".endMessage"));
}

// Function to update the score display
function updateScore() {
  const playerScoreElement = document.getElementById('player');
  const computerScoreElement = document.getElementById('cpu');
  const rounds = document.querySelector("#round p");

  if (roundCounter<5) {
    rounds.textContent = `ROUND ${roundCounter+1}`;
  }
  playerScoreElement.textContent = `PLAYER : ${playerPoints}`;
  computerScoreElement.textContent = `COMPUTER : ${computerPoints}`;
}

// Function to handle player's selection
function play(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateScore();
}

// Function to initialize the game
function game() {

    console.log(document.querySelector(".console-end"));
    const optionsDiv = document.querySelectorAll('.options div');

    optionsDiv.forEach((option) => {
        option.addEventListener('click', function () {
            let playerSelection = option.getAttribute('id');
            play(playerSelection);
            roundCounter++;

            if(roundCounter > 5){
                gameOver();
            }
        });
    });
}
// Call the startGame function on window load
window.onload = game;
