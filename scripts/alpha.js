
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