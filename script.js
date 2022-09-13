/**
 * This is my take on the Rock,Paper,Scissors game of The Odin Project
 * @author Ana Ferreira
 */

    const playerSelection = `PaPer`;
    const computerSelection = getComputerChoice();
    console.log(`The computer selected ${computerSelection}`);

    
    console.log(playRound(playerSelection, computerSelection));


/**
 * Returns either Rock,Paper or Scissors
 * @return 
 */
function getComputerChoice() {
    const options = ["rock","paper","scissor"];
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

    let playerWins = (player==='rock'&& computerSelection==='scissor') ||
    (player==='paper' && computerSelection==='rock') ||
    (player==='scissor' && computerSelection==='paper');

    let result;

    if(player === computerSelection){
        result = `It's a tie!`;
    }

    else if(playerWins){
        result = `You Win! ${player} beats ${computerSelection}`;
    }

    else{
        result = `You Lose! ${computerSelection} beats ${player}`;
    }

    return result;
}
