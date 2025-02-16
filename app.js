let playerScore = 0;
let computerScore = 0;;

// Change the computer's displayed image
function changeImage(displayImage,choice) {
    document.querySelector("#random img").src = displayImage;
    document.querySelector("#random p").textContent = choice;
}

// Generate computer choice
function generateChoice() {
    let value = Math.floor(Math.random() * 3); // 0, 1, 2

    let choice = (value === 0) ? "rock" : (value === 1) ? "paper" : "scissors";
    let image = (choice === "rock") ? "rock-image.png" : (choice === "paper") ? "paper-image.webp" : "scissors-image.png";

    changeImage(image,choice);
    return choice;
}

//Show popup with result
function showPopup(message) {
    let popup = document.getElementById("popup-result");
    let resultBoard = document.getElementById("resultboard");
    popup.textContent = message;
    resultBoard.classList.add("active");
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        resultBoard.classList.remove("active");
        popup.classList.remove("show");
    }, 3000);
}

// Game logic
function playRound(playerChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) return; // Stop game if already won

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

// Handle Player Choice
function handleChoice(event) {
    let playerChoice = event.currentTarget.parentElement.id; // Get parent div's id
    let computerChoice = generateChoice();
    playRound(playerChoice, computerChoice);
}

// Attach event listeners to buttons inside cards
document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", handleChoice);
});
