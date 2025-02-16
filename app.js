let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

// Change the computer's displayed image
function changeImage(displayImage) {
    document.querySelector("#random img").src = displayImage;
}

// Generate computer choice
function generateChoice() {
    let value = Math.floor(Math.random() * 3); // 0, 1, 2

    let choice = (value === 0) ? "rock" : (value === 1) ? "paper" : "scissors";
    let image = (choice === "rock") ? "rock-image.jpg" : (choice === "paper") ? "paper-image.webp" : "scissors-image.png";
    
    changeImage(image);
    return choice;
}

// Game logic
function playRound(playerChoice, computerChoice) {
    if (playerChoice !== computerChoice) {
        if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            document.getElementById("display-playerScore").textContent = ++playerScore;
        } else {
            document.getElementById("display-computerScore").textContent = ++computerScore;
        }
    }

    roundCount++;

    if (roundCount === maxRounds) {
        if (playerScore > computerScore) {
            document.getElementById("display-result").textContent = "🎉 You win the game!";
        } else if (playerScore < computerScore) {
            document.getElementById("display-result").textContent = "💻 Computer wins!";
        } else {
            document.getElementById("display-result").textContent = "😐 It's a tie!";
        }
    }
}

// Handle Player Choice
function handleChoice(event) {
    if (roundCount < maxRounds) {
        let playerChoice = event.currentTarget.parentElement.id; // Get parent div's id
        let computerChoice = generateChoice();
        playRound(playerChoice, computerChoice);
    }
}

// Attach event listeners to buttons inside cards
document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", handleChoice);
});
