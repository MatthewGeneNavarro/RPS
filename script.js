
let playerWins = 0;
let computerWins = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
let player = '';
rock.addEventListener('click', () =>{
    player = 'rock';
    console.log("Inside rock event listener");
    game(computerPlay() ,player);
    
})

paper.addEventListener('click',()=> {
    player = 'paper';
    console.log("Inside rock event listener");
    game(computerPlay() ,player);
})

scissor.addEventListener('click',()=> {
    player = 'scissors';
    console.log("Inside rock event listener");
    game(computerPlay() ,player);
})


//computer choice output = 'rock' || 'paper' || 'scissor'
function computerPlay() {
    console.log('Inside computerPlay function');
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


// takes  player choice string && computer choice string as input
function playRound(playerSelection, computerSelection) {

    console.log('Inside playRound function');
     playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        let x = document.createElement('p');
        x.textContent = "Computer wins! Paper beats Rock"
        document.querySelector('.results .winner').append(x);
        return 2;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        let x = document.createElement('p');
        x.textContent = "Player wins! Paper beats Rock"
        document.querySelector('.results .winner').append(x);
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        let x = document.createElement('p');
        x.textContent = "Player wins! Rock beats Scissors"
        document.querySelector('.results .winner').append(x);
        return 1;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        let x = document.createElement('p');
        x.textContent = "Computer wins! Rock beats Scissors"
        document.querySelector('.results .winner').append(x);
        return 2;
    } else if ( playerSelection === "paper" && computerSelection === "scissors") {
        let x = document.createElement('p');
        x.textContent = "Computer wins! Scissors beat Paper"
        document.querySelector('.results .winner').append(x);
        return 2;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        let x = document.createElement('p');
        x.textContent = "Player wins! Scissors beat Paper"
        document.querySelector('.results .winner').append(x);
        return 1;
    }  else {
        let x = document.createElement('p');
        x.textContent = "Tie"
        document.querySelector('.results .winner').append(x);
        return 0;
    }


}


// two inputs 
// results computerChoice, playerChoice
// end game when a winner has 5 points
function game( computerPlay, playerchoice) {

    console.log('inside game function');
    console.log(computerPlay);
    console.log(playerchoice);



    y = playRound(playerchoice, computerPlay);
    
    if (y === 1){
        if (playerWins === 5){
            let winner = document.createElement('p');
            winner.textContent = "Player won the Game!";
            document.querySelector('.winner').append(winner);
        }
        playerWins ++;
        document.querySelector('#player').textContent = playerWins;
    } else if (y === 2) {
        if (computerWins === 5){
            let winner = document.createElement('p');
            winner.textContent = "Computer won the Game!";
            document.querySelector('.winner').append(winner);
        }
        computerWins ++;
        document.querySelector('#computer').textContent = computerWins;
    } 

    console.log(computerWins);
    console.log(playerWins);

    //remove loop
    //check Wins on each function execution
 

}

/* let x = document.createElement('p');
x.textContent = "test";
document.querySelector('.results').append(x); */