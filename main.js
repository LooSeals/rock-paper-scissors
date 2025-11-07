
// Pseudocode

/*
User inputs value to console
Console returns a random value
If paper is equal to rock 
    Return to console 'You win!'
Rlse if paper is equal to scissor
    Return to console 'You lose!'
Rlse if paper is equal to paper
    Return to console 'You Tie!'

If rock is equal to scissor
    return to console 'You win!'
Rlse if rock is equal to paper
    Return to console 'You lose!'
Else if rock is equal to rock
    Return to console 'You Tie!'

If scissor is equal to paper 
    Return to console 'You win!'
Else if scissor is equal to rock 
    Return to console 'You lose!'
Else if scissor is equal to scissor
    Return to console 'You tie!'
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() *3);
    if (num === 0) {
        console.log( "rock" );
    } else if (num === 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}


function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors")
    
    console.log(choice.toLowerCase())
}


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log('You tie!')
        return;
    } else if (humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === " paper" )
    {
        console.log("You win!")
        humanScore++
    } else {
        console.log("You Loose!")
        computerScore++
    }
}


function playGame() {
    
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    
    }
 }
playGame();


function finalScore() {
    score = `Your score is ${humanScore} and computer score is ${computerScore}`
    console.log(score)
    if (humanScore > computerScore) {
            console.log("You win! Game Over!")
        }   else if (humanScore < computerScore) {
            console.log("You Loose! Game Over!")
        }   else {
            console.log("You Tied! Game Over!")
        }
}

finalScore();

