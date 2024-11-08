//values for choice and text on page
let gameText = document.getElementById("game-text");
let choice = document.getElementById("choice");
let result; 

//take random number 0-2 to determine rock paper scissors response
function generateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    //change int to rock/paper/scissors

    switch(computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("¯\\_(ツ)_/¯");
    }

    return computerChoice;
}

//start game
function play() {
    //get response
    let response = generateComputerChoice();
    //take user input
    let playerChoice = choice.value;

    //determine outcome
    if(response == playerChoice) {
        result = "It's a Draw";
    } else if(playerChoice == "rock") {
        if(response == "scissors") {
            result = "You Win!";
        }
        if(response == "paper") {
            result = "You lose...";
        }
    } else if(playerChoice == "paper") {
        if(response == "rock") {
            result = "You Win!";
        }
        if(response == "scissors") {
            result = "You lose...";
        }
    } else if(playerChoice == "scissors") {
        if(response == "paper") {
            result = "You Win!";
        }
        if(response == "rock") {
            result = "You lose...";
        }
    }

    //display outcome
    //console.log("You played " + playerChoice);
    //console.log("They played " + response);
    //console.log(result);

    alert("You played " + playerChoice + "\nThey played " + response + "\n" + result)
}