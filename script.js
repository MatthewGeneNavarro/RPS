function computerPlay() {
    const min = 1;
    const max = 3;
    let sum = Math.floor(Math.random() * (max - min +1) + min);
    console.log(sum);
    if(sum === 1){
        return "rock";
    } else if(sum === 2) {
        return "paper";
    } else if (sum === 3) {
        return "scissors";
    }
    
}

function playRound(playerSelection, computerSelection) {

     playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins! Paper beats Rock");
        return 2;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("Player wins! Paper beats Rock");
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins! Rock beats Scissors");
        return 1;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Computer wins! Rock beats Scissors");
        return 2;
    } else if ( playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins! Scissors beat Paper");
        return 2;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("Player wins! Scissors beat Paper");
        return 1;
    }  

}

function game() {
    let player = 0;
    let computer = 0;

    for(x =0; x<= 5; x++){
        y = playRound(prompt("Player choose"), computerPlay());
        if (y === 1){
            player ++;
        } else if (y === 2) {
            computer ++;
        }
    }
 
}
