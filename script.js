//---------------- VARIABLES -------------------
var CHOICES = ["rock", "paper", "scissors"];
var ROUNDS = 1;
var playerSelection = "";
var computerSelection = ""
var pl_score = 0,
    comp_score = 0;

//---------------- FUNCTIONS -------------------

function writeTextOnDiv(id, element, text) {
    let content = document.createElement(element);
    content.textContent = text;
    document.querySelector(id).appendChild(content);
}

function toTitleCase(txt) {
    // Convert string to Title Case

    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

function getComputerChoice() {
    // Computer choose a random option from array
    let random_number = Math.floor(Math.random() * CHOICES.length);
    let computer_choice = CHOICES[random_number];
    document.getElementById("pc-choice").src=`svg/${computer_choice}-xl.svg`;
    return computer_choice;
}

function whoWinsThisRound(playerSelection, computerSelection) {


    let pl_select = toTitleCase(playerSelection);
    let comp_select = toTitleCase(computerSelection);


    // Conditions
    if (pl_select === comp_select) {
        return `It's a Draw! ${pl_select} vs ${comp_select} is a draw.`;

    } else if (pl_select === "Rock" && comp_select === "Scissors"
        || pl_select === "Paper" && comp_select === "Rock"
        || pl_select === "Scissors" && comp_select === "Paper") {
        pl_score += 1;
        return `You Win! ${pl_select} beats ${comp_select}.`;

    } else {
        comp_score += 1;
        return `You Lose! ${comp_select} beats ${pl_select}.`;
    }
}

function winner(pl_score, comp_score) {
    if (pl_score === comp_score) {
        return `It's a draw.`
    } else if (pl_score > comp_score) {
        return `Congratulations, you win!`
    } else {
        return `Sorry, you lose.`
    }
}

function createButton(choice){
    const rockButton = document.querySelector(`#${choice}`);
    rockButton.addEventListener('click',function startRound() {
        computerSelection = getComputerChoice();
        playerSelection = choice;
        console.log(playerSelection, computerSelection);
        document.getElementById("my-choice").src=`svg/${choice}-xl.svg`;
        let result = whoWinsThisRound(playerSelection, computerSelection);
        document.getElementById("result").textContent = result;

    });
    rockButton.addEventListener('mouseover',() => document.getElementById(choice).style.cursor = "pointer");
}

function newRound(){
    document.getElementById("my-choice").src=`png/waiting.png`;
    document.getElementById("pc-choice").src=`png/waiting.png`;
}

function game() {
    // Game with X rounds to play
    for (let i = 0; i < ROUNDS; i++) {
        newRound()
        createButton("rock");
        createButton("paper");
        createButton("scissors");
    }
    // // Winner announcement comparing scores before.
    // const whoIsTheWinner = winner(pl_score, comp_score);
    // writeTextOnDiv("#winner", "h1", `This is the final result:\nYou: ${pl_score} vs Computer: ${comp_score}. ${whoIsTheWinner}`);
}

//-------------------- START--------------------
game();

