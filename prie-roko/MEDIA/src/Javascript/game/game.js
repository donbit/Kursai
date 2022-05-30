const rock = 1;
const paper = 2;
const scissors = 3;
let playerWins = false;

function play() {
    const computerChoice = Math.floor(Math.random() * 3 ) +1;

    if (playerChoice == rock && computerChoice == paper) {
        log(rock, paper)
    } else if (playerChoice == scissors && computerChoice == paper){
        playerWins = true;
        log();
    } 
}

function log(playerChoice, computerChoice) {
    console.log('Zaidejas pasirinko akmeni');
    console.log('Kompiuteris pasirinko popieriu');
    if (playerWins) {
        console.log('Zaidejas laimejo');
    } else {
        console.log('Kompiuteris laimejo');
    }
}