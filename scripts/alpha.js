// Utility function start
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
};

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
};

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
};

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
};

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
};

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
};

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
};
// Utility function end

document.addEventListener("keyup", keyboardButtonPress)
function keyboardButtonPress(event) {

    const playerPressed = event.key;

    // Stop the game if pressed "esc"
    if (playerPressed === "Escape") {
        gameOver();
    }

    // get the expected press
    const currentAlphabet = document.getElementById("current_alphabet");
    const alphabet = currentAlphabet.innerText.toLowerCase();

    // check matched or not
    if (playerPressed === alphabet) {

        const currentScore = getTextElementValueById("current_score");
        const score = currentScore + 1;
        setTextElementValueById("current_score", score);

        removeBackgroundColorById(alphabet);
        continueGame();

    }
    else {

        const currentLife = getTextElementValueById("current_life");
        const life = currentLife - 1;
        setTextElementValueById("current_life", life);

        if (life === 0) {
            gameOver();
        }
    }

};


function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");

    // get random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
};

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById("current_alphabet");
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
};

function play() {
    hideElementById("home_screen");
    hideElementById("final_score");
    showElementById("play_ground");

    setTextElementValueById("current_life", 5);
    setTextElementValueById("current_score", 0);

    continueGame();
};

function gameOver() {
    hideElementById("play_ground");
    showElementById("final_score");

    const lastScore = getTextElementValueById("current_score")
    setTextElementValueById("last_score", lastScore);

    const alphabet = getElementTextById("current_alphabet");
    console.log(alphabet);
    removeBackgroundColorById(alphabet);

};