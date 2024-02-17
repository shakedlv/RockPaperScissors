function computerPlay() {
    const array = ["Rock", "Paper", "Scissors"]
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return "You won! Paper beats Rocks!";
    }
    else if (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock") {
        return "You Lost! Paper beats Rocks!";

    }

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You won! Rocks beats Scissors!";

    }
    else if (computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors") {
        return "You Lost! Paper beats Rocks!";
        return 1;

    }

    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return "You won! Scissors beats Paper!"
    }
    else if (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper") {
        return "You Lost! Scissors beats Paper!";
    }

    return "Its a tie !"
}

function getPlayerInput() {
    const array = ["rock", "paper", "scissors"]
    let input = prompt("Pick Rock / Paper / Scissors?")
    while (!array.includes(input.toLocaleLowerCase())) {
        input = prompt("Invalid Input! -  Pick Rock / Paper / Scissors?")
    }

    return input;
}

let pc = computerPlay();


function selectPlayerPick(pick)
{
    let result = playRound(pick,pc)
    let btn = document.getElementById(pick)
    let resultCanvas = document.getElementById("result")
    btn.classList.add("selected");
    resultCanvas.style.display = "flex";
    document.getElementById("title").innerHTML = result;
}

function playAgain()
{
    let resultCanvas = document.getElementById("result")
    resultCanvas.style.display = "none";

    document.getElementById("paper").classList.remove("selected");
    document.getElementById("rock").classList.remove("selected");
    document.getElementById("scissors").classList.remove("selected");

}