//Rock Paper Scissor Game
console.log("Rock Paper Scissors Game !!");

//Number of Rounds
let round = Number(prompt("Enter number of rounds you want to play"));

console.log(`Number of round = ${round}`);

//Variables to store score
let humanScore = 0;
let computerScore = 0;


//Generate computer choices
function generateChoice(){
    // Generates a number between 1 and 3
    let value = Math.floor(Math.random() * 3)+1;

    //Assign choices to the numbers
    return (value == 1) ? "rock" : (value == 2) ? "paper" : "scissors";

}

//Game's logic
function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
        console.log("Round Tie");
    }else{

        if((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++
        }else{
            computerScore++;
        }

    }
}


//Play the game
for(let i=0; i<round; i++){

    console.log("Enter your choice : Rock,Paper,Scissors or quit to exit ");
    let humanChoice = prompt("Enter your choice : Rock,Paper,Scissor  or quit to exit ").toLowerCase();
    console.log(`Your's choice = ${humanChoice}`);

    if(humanChoice === "quit"){
        break;
    }

    let computerChoice = generateChoice();
    console.log(`Computer's choice = ${computerChoice}`);

    playRound(humanChoice,computerChoice);

}

//Final Score Declaration
console.log(`Final Score -> You: ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("You Win !! Congrats.");
} else if (humanScore < computerScore) {
    console.log("You Lose !!");
} else {
    console.log("It's a Tie !!");
}