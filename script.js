
const options = ["rock","paper","scissor"];

let computerChoice = getComputerChoice(options);

console.log(computerChoice);
/**
 * Returns a valid computer choice
 * @param  
 * @return opcao valida
 */
function getComputerChoice(options) {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function round(computerChoice, playerChoice){
    let player = toLowerCase(playerChoice);

    switch (computerChoice) {
        case 'rock':
            
            break;
        case 'paper':
            break;
        case 'scissor':
            break;
        default:
            console.log('The End')
            break;
    }

}

