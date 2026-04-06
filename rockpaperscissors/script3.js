let str = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0; 
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

function computerPlay() {
    return str[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function updateScore() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
   
}

function playGame(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    updateScore();
    console.log(result);
    alert(result);
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));