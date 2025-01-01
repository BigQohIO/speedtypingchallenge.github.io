const words = [
    "apple", "banana", "cherry", "date", "elderberry",
    "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince",
    "raspberry", "strawberry", "tangerine", "watermelon",
    "pear", "plum", "peach"
];

let currentWord = "";
let score = 0;
let timeLeft = 30;
let timer;

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.getElementById('message');

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
    messageDisplay.textContent = '';
    wordInput.value = '';
    wordInput.disabled = false;
    startButton.disabled = true;
    generateWord();
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent = currentWord;
}

function checkInput() {
    if (wordInput.value === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        wordInput.value = '';
        generateWord();
    }
}

function endGame() {
    wordInput.disabled = true;
    startButton.disabled = false;
    messageDisplay.textContent = `Game over! Your score is ${score}.`;
}

startButton.addEventListener('click', startGame);
wordInput.addEventListener('input', checkInput);
