const puzzleWord = "POUNDEDYAM";
let shuffledWord = shuffleString(puzzleWord);
const feedback = document.getElementById("feedback");
const puzzleElement = document.getElementById("puzzle");
const nameInput = document.getElementById("name");
const puzzleInput = document.getElementById("puzzle-input");

function generatePuzzle() {
    puzzleElement.textContent = shuffledWord;
}

function shuffleString(string) {
    return string.split('').sort(() => Math.random() - 0.5).join('');
}

function checkAnswer() {
    const answer = puzzleInput.value.toUpperCase();
    if (answer === puzzleWord) {
        feedback.textContent = "Correct! Well done, " + nameInput.value + "!";
        sendWhatsAppMessage(nameInput.value + " solved the Swallow Scramble Challenge! The correct answer is: " + puzzleWord);
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
}

function sendWhatsAppMessage(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = "https://wa.me/2348166550096?text=" + encodedMessage;
    window.open(whatsappLink);
}

// Initialize the game
generatePuzzle();
