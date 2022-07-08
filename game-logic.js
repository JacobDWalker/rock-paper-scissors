const moves = ["Rock", "Paper", "Scissors"]


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}



function playRound(playerMove) {
    let computerChoice = getRandomInt();
    let userChoice = Number(playerMove);

    computerMoves.textContent = "Computer Move: ";
    computerMoves.appendChild((selectMoveIcon(computerChoice)).cloneNode());
    userMoves.textContent = "Your Move: ";
    userMoves.appendChild((selectMoveIcon(userChoice)).cloneNode());

    if (userChoice === computerChoice)  {
        gameResultDiv.textContent = "You Tied";
    } else if (((computerChoice + 1) % 3) === userChoice) {
        userScore++;
        gameResultDiv.textContent = "You Won"
    } else {
        computerScore++;
        gameResultDiv.textContent = "You Lost"
    }
    roundCount++;
    updateScores();
}

function selectMoveIcon(move) {
    if (move === 0) {
        return rock;
    } else if (move === 1) {
        return paper;
    } else {
        return scissors;
    }
}

function updateScores() {
    roundTracker.textContent = roundCount.toString();
    userScoreDiv.textContent = userScore.toString();
    computerScoreDiv.textContent = computerScore.toString();
}


let userScore = 0;
let computerScore = 0;
let roundCount = 0;



const iconsDiv = document.querySelector('.icons-body');
const restartButton = document.querySelector('#restart-button');
const playButton = document.querySelector('#play-button');

iconsDiv.style.display = 'none';
restartButton.style.display = 'none';

// Divs to be updated after each round based on game outcome
let userScoreDiv = document.getElementById('user-score');
let computerScoreDiv = document.getElementById('computer-score');
let roundTracker = document.getElementById('round-tracker');

// Initializing scores and round count
userScoreDiv.textContent = "0";
computerScoreDiv.textContent = "0";
roundTracker.textContent = "0";

const moveIcons = document.querySelectorAll('.icon');

// Elements that update after each round
let gameResultDiv = document.getElementById('game-outcome');
let computerMoves = document.getElementById('computer-moves');
let userMoves = document.getElementById('user-moves');

// Create smaller icons for move breakdown
let rock = document.createElement("img");
rock.src = '/image/rock.png';
rock.alt = "rock"
rock.width = 50;
rock.height = 50;

let paper = document.createElement("img");
paper.src = '/image/paper.png';
paper.alt = "paper"
paper.width = 50;
paper.height = 50;

let scissors = document.createElement("img");
scissors.src = '/image/scissors.png';
scissors.alt = "scissors"
scissors.width = 50;
scissors.height = 50;




moveIcons.forEach((icon) => icon.addEventListener('click', (e) =>  {
    playRound(e.target.getAttribute('data-key'))
}))

playButton.addEventListener('click', () => {
    iconsDiv.style.display = 'flex';
    restartButton.style.display = 'flex';
    playButton.style.display = 'none';
})

restartButton.addEventListener('click', () => {
    userScore = 0;
    roundCount = 0;
    computerScore = 0;
    updateScores();
    gameResultDiv.textContent = "";
    computerMoves.textContent = "";
    userMoves.textContent = "";
})
