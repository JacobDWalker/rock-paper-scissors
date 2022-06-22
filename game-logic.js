const moves = ["rock", "paper", "scissors"]

function computerMove() {
    return moves[getRandomInt()];

};
function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 3)
    return randomInt;
};

function userMove() {
    let move = Number(prompt("Rock (0), Paper(1), or Scissors(2)"));
    return move;
};

function playRound() {
    let userChoice = userMove();
    let computerChoice = getRandomInt();

    console.log(`Computer move: ${moves[computerChoice]}`);
    console.log(`Your move: ${moves[userChoice]}`);

    if (userChoice === computerChoice)  {
        console.log("You Tie");
        return "You Tie";
    } else if (((computerChoice + 1) % 3) === userChoice) {
        console.log("You Win");
        return "You Win";
    } else {
        console.log("You lose");
        return "You Lose"
    }
};

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let gameOutcome = playRound();

        if (gameOutcome === "You Win") {
            ++playerWins;
        } else if (gameOutcome === "You Lose") {
            ++computerWins;
        }
    }

    if (playerWins > computerWins) {
        console.log(`You won the game with ${playerWins} wins to ${computerWins}`)
    } else if (playerWins === computerWins) {
        console.log(`You with ${playerWins} wins`)
    } else {
        console.log(`You lost the game with ${playerWins} wins to ${computerWins}`)
    }

}