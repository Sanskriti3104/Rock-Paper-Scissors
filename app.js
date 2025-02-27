let playerScore = 0;
let computerScore = 0;

// Attach event listeners only to rock, paper, and scissors buttons
document.querySelectorAll(".card button").forEach(button => {
    if (["rock", "paper", "scissors"].includes(button.parentElement.id)) {
        button.addEventListener("click", handleChoice);
    }
});

// Handle Player Choice
function handleChoice(event) {
    let playerChoice = event.currentTarget.parentElement.id; 
    let computerChoice = generateChoice();
    playRound(playerChoice, computerChoice);
}

// Generate computer choice
function generateChoice() {
    let value = Math.floor(Math.random() * 3); 

    let choice = (value === 0) ? "rock" : (value === 1) ? "paper" : "scissors";
    let image = (choice === "rock") ? "media/rock-image.png" : (choice === "paper") ? "media/paper-image.webp" : "media/scissors-image.png";

    changeImage(image,choice);
    return choice;
}

// Change the computer's displayed image
function changeImage(displayImage,choice) {
    document.querySelector("#random img").src = displayImage;
    document.querySelector("#random p").textContent = (choice === "rock") ? "Rock" : (choice === "paper") ? "Paper" : "Scissors";
}

// Game logic
function playRound(playerChoice, computerChoice) {
    // Stop game if already won
    if (playerScore === 5 || computerScore === 5) return; 

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

    if (playerScore === 5 || computerScore === 5) {
        showPopup(playerScore === 5 ? "🎉 You win the game!" : "💻 Computer wins!");

        document.querySelectorAll(".card button").forEach(button => {
            button.disabled = true;
        });
    }
}
//Show popup with result
function showPopup(message) {
    let popup = document.getElementById("popup-result");
    let resultBoard = document.getElementById("resultboard");
    popup.textContent = message;
    resultBoard.style.display = "flex";
    resultBoard.classList.add("active");
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        resultBoard.style.display = "none"; // Hide again
        resultBoard.classList.remove("active");
        popup.classList.remove("show");

        resetGame();
    }, 3000);

}
document.getElementById("resetBtn").addEventListener("click", resetGame);

function resetGame() {
    // Reset scores
    document.getElementById("display-playerScore").textContent = "0";
    document.getElementById("display-computerScore").textContent = "0";

    // Reset computer choice display
    document.getElementById("random").querySelector("p").textContent = "Computer";
    document.getElementById("random").querySelector("img").src ="media/computer-image.png";

    // Reset result popup text
    document.getElementById("popup-result").textContent = "";

    // (Optional) Hide the result popup if it's being displayed
    document.getElementById("resultboard").style.display = "none";
    
    playerScore = 0;
    computerScore = 0;
    
    document.querySelectorAll(".card button").forEach(button => {
        button.disabled = false;
    });

}
