function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    let choose = prompt("Rock, Paper, Scissors?: ")

    if (choose.toLowerCase() !== "rock" && choose.toLowerCase() !== "paper" && choose.toLowerCase() !== "scissors") {
        alert("Please only choose Rock, Paper or Scissors")
        return getHumanChoice();
    }

    return choose;
}


let humanScore = 0
let computerScore = 0

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    if (humanSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            alert("Human wins!")
            humanScore++;
        } else if (computerSelection.toLowerCase() === "scissors") {
            alert("Computer wins!")
            computerScore++;
        } else {
            alert("Draw!")
        }
    } else if (humanSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "scissors") {
            alert("Human wins!")
            humanScore++;
        } else if (computerSelection.toLowerCase() === "paper") {
            alert("Computer wins!")
            computerScore++;
        } else {
            alert("Draw!")
        }
    } else if (humanSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper") {
            alert("Human wins!")
            humanScore++;
        } else if (computerSelection.toLowerCase() === "rock") {
            alert ("Computer wins!")
            computerScore++;
        } else {
            alert ("Draw!")
        }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        alert(`Round ${i} starts!`)
        playRound();
        alert(`Round ${i}: Human: ${humanScore} Computer: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        alert("YOU WON THE GAME!")
    } else if (computerScore > humanScore) {
        alert("COMPUTER WINS THE GAME")
    } else {
        alert("It's a draw!")
    }
}

playGame()