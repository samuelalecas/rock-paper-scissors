//---------------- VARIABLES -------------------
var CHOICES = ["Rock", "Paper", "Scissors"];
var ROUNDS = 5;
var pl_score = 0,
    comp_score = 0;

//---------------- FUNCTIONS -------------------

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
    //Players choices are compared to define who wins the current round

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
        pl_score += 1;
        return `You Win! ${pl_select_title} beats ${computerSelection}.`;

    // Validation line: when an invalid word it's typed
    } else if (CHOICES.includes(pl_select_title) === false) {
        comp_score += 1;
        return `You Lose! Computer wins an additional point due to ${pl_select_title} is not a valid word.`;

    } else {
        comp_score += 1;
        return `You Lose! ${computerSelection} beats ${pl_select_title}.`;
    }
}

function winner(pl_score, comp_score) {
    // Winner announcement comparing scores before.
    console.log(`This is the final result:\nYou: ${pl_score} vs Computer: ${comp_score}.`)

    if (pl_score === comp_score) {
        return `It's a draw.`
    } else if (pl_score > comp_score) {
        return `Congratulations, you win!`
    } else {
        return `Sorry, you lose.`
    }
}

function game() {
    // Game with X rounds to play
    for (let i = 0; i < ROUNDS; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?: ")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(winner(pl_score, comp_score));
}

//-------------------- START--------------------
game();

