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

function playGame() {
    let userChoice = userMove();
    let computerChoice = getRandomInt();

    console.log(`Computer move: ${moves[computerChoice]}`);
    console.log(`Your move: ${moves[userChoice]}`);

    if (userChoice === computerChoice)  {
        console.log("You Tie");
    } else if (((computerChoice + 1) % 3) === userChoice) {
        console.log("You Win");
    } else {
        console.log("You lose");
    }
};