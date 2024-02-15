
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


document.addEventListener("keyup", keyboardButtonPress)
function keyboardButtonPress(event) {

    const playerPressed = event.key;

    // get the expected press
    const currentAlphabet = document.getElementById("current_alphabet");
    const alphabet = currentAlphabet.innerText.toLowerCase();

    // check matched or not
    if (playerPressed === alphabet) {

        const currentScoreElement = document.getElementById("current_score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const score = currentScore + 1;
        currentScoreElement.innerText = score;

        removeBackgroundColorById(alphabet);
        continueGame();

    }
    else {

        const currentLifeElement = document.getElementById("current_life");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const life = currentLife - 1;
        currentLifeElement.innerText = life;
        
    }

}


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
    showElementById("play_ground");
    continueGame();
};