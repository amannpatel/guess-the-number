let computerGuess;
let userGuess = [];

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);

    document.getElementById("newGameButton").style.display = "none";

    document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "display";
};

const easyMode = () => {
    startGame();
};

const hardMode = () => {
    startGame();
};
