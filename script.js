/**
 * This is my take on the Rock,Paper,Scissors game of The Odin Project
 * @author Ana Ferreira
 */

 const options = ["rock","paper","scissors"];
 let playerPoints  = 0;
 let computerPoints = 0;

 game();


 /**
  * Opening message
  */
 function welcome() {

    alert(`This game of Rock, Paper, Scissors consists of 5 rounds where you will be playing against your computer\nEnjoy!`);
}

/**
 * Gets the player option
 * @return the option selected by player
 */
 function getPlayerSelection() {
    return prompt("Pick rock,paper or scissors?");
}


/**
 * Returns either Rock,Paper or Scissors
 * @return 
 */
function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

/**
 * Plays one round of Rock,Paper,Scissors
 * @param computerChoice
 * @param playerChoice
 * @return a string that declares the winner of the round
 * 
 */
function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase(playerSelection);

    let playerWins = (player==='rock'&& computerSelection==='scissors') ||
    (player==='paper' && computerSelection==='rock') ||
    (player==='scissors' && computerSelection==='paper');

    let result;

    if(player === computerSelection){
        result = `It's a tie! :/`;
    }

    else if(playerWins){
        result = `You Win! ${player} beats ${computerSelection} :)`;
        playerPoints++;
    }

    else{
        result = `You Lose! ${computerSelection} beats ${player} :(`;
        computerPoints++;
    }

    return result;
}


/**
 * Verifies if the player typed a valid option
 * @param {*} playerSelection 
 * @return true if valid, false otherwise
 */
function isValidPlayerSelection(playerSelection) {

    if (typeof playerSelection != 'string') {
        return false;
    }

    playerSelection = playerSelection.toLowerCase();
    let result = false;
    for (let i = 0; i < options.length; i++) {
        if(playerSelection === options[i]){
            result = true;
        }  
    }
    return result;
}

function whoWin() {
    return playerPoints > computerPoints? 'You won' : 'You lost';
}

/**
 * Plays 5 rounds of the game
 */
function game() {

    welcome();

    for (let i = 0; i < 5 || playerPoints === computerPoints; i++) {

        let playerSelection = getPlayerSelection();

        while (!isValidPlayerSelection(playerSelection)) {
            alert(`Please enter a valid option \nRock,Paper or Scissors`);
            playerSelection = getPlayerSelection();
        }

        let computerSelection = getComputerChoice();
        alert(`The computer selected ${computerSelection}\n` + playRound(playerSelection, computerSelection));
        alert(`End of round ${i+1}\n YOU: ${playerPoints}\n COMPUTER: ${computerPoints}`);
    }

    alert(whoWin()+`\nThanks for playing!`);
}
