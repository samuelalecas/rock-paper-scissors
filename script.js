var CHOICES = ["Rock", "Paper", "Scissors"];

function toTitleCase(txt) {
    // Convert string to Title Case
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

function getComputerChoice() {
    // Computer choose a random option from array
    let random_number = Math.floor(Math.random() * CHOICES.length);
    let computer_choice = CHOICES[random_number];
    return computer_choice;
}

function playRound(playerSelection, computerSelection) {
    let pl_select_title = toTitleCase(playerSelection)
    let pl_select = playerSelection.toLowerCase();
    let comp_select = computerSelection.toLowerCase();

    // Computer selection is shown
    console.log(`Computer choose ${computerSelection}.`);

    // Conditions
    if (pl_select === comp_select) {
        return `It's a Draw! ${pl_select_title} vs ${computerSelection} is a draw.`;
    } else if (pl_select === "rock" && comp_select === "scissors"
        || pl_select === "paper" && comp_select === "rock"
        || pl_select === "scissors" && comp_select === "paper") {
            return `You Win! ${pl_select_title} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${pl_select_title}.`;
    }
}

let playerSelection = prompt("Rock, Paper or Scissors?: ")
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
