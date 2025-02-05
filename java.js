function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

function playRound(playerSelection) {
    if (humanScore >= maxScore || computerScore >= maxScore) return;

    const computerSelection = getComputerChoice();

    let result;
    if (playerSelection === computerSelection) {
        result = `TIE! You both chose ${playerSelection}.`;
    } else {
        const winConditions = {
            Rock: "Scissors",
            Paper: "Rock",
            Scissors: "Paper"
        };

        if (winConditions[playerSelection] === computerSelection) {
            humanScore ++;
            result = `You Win! ${playerSelection} beats ${computerSelection}`
        } else {
            computerScore++;
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    resultText.textContent = result;
    scoreText.textContent = `Score: Player ${humanScore} - Computer ${computerScore}`;

    if (humanScore === maxScore || computerScore === maxScore) {
        announceWinner();
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        resultText.textContent += "YOU ARE THE WINNER"
    } else {
        resultText.textContent += "COMPUTER WINS"
    }

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
