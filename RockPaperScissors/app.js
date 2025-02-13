const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice;
let computerChoice;
let result 

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber); // Debugging step

    // Assign computer choice based on the random number
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    } else if (randomNumber === 3) {
        computerChoice = 'paper';
    }

    // Update the display
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult(){
    if (computerChoice === userChoice){
        result = "its a draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "you win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "you lost"
   
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "you win!"
    }

    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "you lost"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "you win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "you lost"
    }
    
    resultDisplay.innerHTML = result; 


}

