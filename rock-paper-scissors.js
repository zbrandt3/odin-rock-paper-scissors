
let gameText = document.getElementById("game-text");
let choice = document.getElementById("choice");

function generateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}

function play() {
    generateComputerChoice();
    let playerChoice = choice.value;
    console.log(playerChoice);
}