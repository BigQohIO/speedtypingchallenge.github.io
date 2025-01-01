// Existing code for speed typing challenge

let words = ["example", "test", "challenge", "speed", "typing", "mango", "cooking", "paranormal", "activity", "fitness", "bother", "matter", "forgot", "the", "born", "happy", "smile"]; // Add your word list here
let currentWord;
let score = 0;
let timeLeft = 30;
let timer;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('timer').innerText = "Time Left: " + timeLeft + " seconds";
    document.getElementById('word-input').disabled = false;
    document.getElementById('word-input').focus();
    nextWord();
    timer = setInterval(updateTimer, 1000);
}

function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-display').innerText = currentWord;
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = "Time Left: " + timeLeft + " seconds";
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

document.getElementById('word-input').addEventListener('input', function() {
    if (this.value === currentWord) {
        score += 1; // Increment score by 1 for each correct word
        document.getElementById('score').innerText = "Score: " + score;
        this.value = '';
        nextWord();
    }
});

function endGame() {
    document.getElementById('word-input').disabled = true;
    document.getElementById('message').innerText = "Game Over! Your score: " + score;
}

// New code for Jayces Idea™ button
document.getElementById('jayces-idea-button').addEventListener('click', function() {
    window.location.href = "https://bigqohio.github.io/JaycesIdeas.github.io/index2.html";
});
