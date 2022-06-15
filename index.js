let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

// AUDIO FILES
let mario = new Audio('./audio/mario.mp3');
let mariod = new Audio('./audio/mariod.mp3');
let amongus = new Audio('./audio/amongus.mp3');
let gtasa = new Audio('./audio/gtasa.mp3');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);

    document.getElementById("newGameButton").style.display = "none";

    document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

// Reload the Page
const newGameBegin = () => {
    mario.play();
    window.location.reload();
};

// Start new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute('disabled', true);
};

// Main Logic of the game
const compareGuess = () => {
    // mario.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High!🐪";
            userNumberUpdate.value = "";

        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low!🐀";
            userNumberUpdate.value = "";

        } else {
            gtasa.play();
            userGuessUpdate.innerHTML = "You Got it!!😻🐱‍🏍";
            userNumberUpdate.value = "";
            startNewGame();

        }
    } else {
        if (userNumber > computerGuess) {
            mariod.play();
            userGuessUpdate.innerHTML = `You Loose!!! Correct number was ${computerGuess}😐🤣`;
            userNumberUpdate.value = "";
            startNewGame();

        } else if (userNumber < computerGuess) {
            mariod.play();
            userGuessUpdate.innerHTML = `You Loose!!! Correct number was ${computerGuess}😐🤣`;
            userNumberUpdate.value = "";
            startNewGame();

        } else {
            gtasa.play();
            userGuessUpdate.innerHTML = "You Got it!! That was close!😲🏆";
            userNumberUpdate.value = "";
            startNewGame();

        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    amongus.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    amongus.play();
    maxGuess = 5;
    startGame();
};
