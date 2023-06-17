const buttons = document.querySelectorAll('.btnChoice');
const container = document.querySelector('#container');
const player = document.querySelector('#playerChoice');
const computer = document.querySelector('#compChoice');
const winner = document.querySelector('#whoWon');
const result = document.querySelector('#finalResult');
const scoreBoard = document.querySelector('#scoreContainer');
const scoreLabel = document.querySelectorAll('.scoreLabel');
const playerResult = document.querySelector('#playerResult');
const compResult = document.querySelector('#compResult');
let playerSelection;
let computerSelection;
let playerScore = 0;
let compScore = 0;

// Press button result
buttons.forEach(button => button.addEventListener('click', (e) => {
    // Player choice:
    playerSelection = e.target.textContent;
    player.textContent = `You chose: ${playerSelection}.`;
    // Computer choice:
    computerSelection = getComputerChoice();
    computer.textContent = `Computer chose: ${computerSelection}.`;
    // Results of who won/draw:
    winner.textContent = `${whoWon()}`;
    // Final result of game
    result.textContent = tallyWinner();
    scoreDisplay();
}))

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randNum = Math.floor(Math.random() * choice.length);
    return choice[randNum];
}

function whoWon() {
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore++;
            return `You beat the computer! ${playerSelection} defeats ${computerSelection}.`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
            compScore++;
            return `The computer beat you! ${computerSelection} defeats ${playerSelection}.`;
    } else {
            return "It's a tie!";
    }
}

function tallyWinner() {
    if (playerScore == 5) {
        return 'You won the game! You reached 5 before the computer! Congrats!!!';
    } else if (compScore == 5) {
        return 'You lost the game! The computer reached 5 before you! Better luck next time.';
    }
}

// Scoreboard:
// playerResult.innerHTML = playerScore.value;
// compResult.innerHTML = compScore.value;

// document.getElementById('playerResult').value = playerScore;
// document.getElementById('compResult').value = compScore;

function scoreDisplay() {
    document.getElementById('playerResult').value = playerScore;
    document.getElementById('compResult').value = compScore;
}

// Return to 0...start game over after scoring 5:
