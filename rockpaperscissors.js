'use strict';

// initialize

let computerScore = 0;
let playerScore = 0;
let victor = "";
let winningWeapon = "";
let losingWeapon = "";
let beats = "";
let winningPlayerMessage = "";
let gameNumber = 1;

// set up GUI

//create buttons

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', function(){ game("Rock"); });
paperButton.addEventListener('click', function(){ game("Paper"); });
scissorsButton.addEventListener('click', function(){ game("Scissors"); });



function game(playerChoice) {

    //original loop began here (iterating using i):
    {

        //choose our weapons
        let computer = getComputerChoice();
        let player = playerChoice;

        //determine the winner and set some variables to handle the victory message
        let winner = findWinner(computer, player);

        if (winner === "Computer") {
            computerScore++;
            winningWeapon = computer;
            losingWeapon = player;
            winningPlayerMessage = "Computer wins!";
        }
        else if (winner === "Player") {
            playerScore++;
            winningWeapon = player;
            losingWeapon = computer;
            winningPlayerMessage = "Player wins!";
        }
        else if (winner === "Tie") {
            winningWeapon = "Neither";
        }

        //handle the specific language for the game 
        switch (winningWeapon) {
            case "Paper":
                beats = " covers ";
                break;

            case "Rock":
                beats = " breaks ";
                break;

            case "Scissors":
                beats = " cuts ";
                break;

            case "Neither":
                beats = " matches ";
                break;

            default:
                beats = " beats ";
        }

        // and output our results

        console.log("Game " + gameNumber);
        console.log("Computer chooses: " + computer);

        //handle a tie, and output the result message

        if (winningWeapon === "Neither") {
            console.log("It's a Match! This round's a tie!");
        } else {
            console.log(winningWeapon + beats + losingWeapon + ": " + winningPlayerMessage);
        }

        //update running score
        console.log("Score: Computer " + computerScore + "; Player " + playerScore);


        gameNumber++;

    }

    //determine victor

    if (playerScore === computerScore) {
        victor = "it's a tie";
    } else if (playerScore > computerScore) {
        victor = "the player";
    } else if (playerScore < computerScore) {
        victor = "the computer";
    } else {
        victor = "error";
    }

    console.log("Current overall winner: " + victor + "!");

    //original loop ended here
}

// SUB-FUNCTIONS BEGIN HERE


function getComputerChoice() {

    //CHOOSE rock, paper, or scissors randomly for the computer player

    let computerChoice = (Math.floor(Math.random() * 3)); // 0 Rock, 1 Paper, 2 Scissors
        switch (computerChoice) {
            case 0:
                return "Rock";
                break;
            case 1:
                return "Paper";
                break;
            case 2:
                return "Scissors";
                break;
            default:
                return "RANDOMIZATION ERROR";
        }
    }


function getPlayerChoice() {

    // GET player choice of rock, paper or scissors
    let playerInput = prompt("Rock, Paper, Scissors?", "");

    // REGULARIZE input
    let playerChoice = regularize(playerInput);
    switch (playerChoice) {
        case "R":
        case "Rock":
            playerChoice = "Rock";
            break;

        case "P":
        case "Paper":
            playerChoice = "Paper";
            break;

        case "S":
        case "Scissors":
        case "Scissor":
            playerChoice = "Scissors";
            break;

        //case "Q":
        //case "Quit":
        //playerChoice = "Quit";
        //quitGame();
        //break;

        default:
            playerChoice = "mismatch";
            // alert("Invalid choice, choose again.");
            // getPlayerChoice();
            break;
    }

    return (playerChoice);
}

function regularize(input) {
    let firstLetter = input.slice(0, 1).toUpperCase();
    let remainder = input.slice(1, input.length).toLowerCase();

    let newString = firstLetter + remainder;

    return newString;
}


function findWinner(computer, player) {
    // EVALUATE which player wins
    // paper beats rock
    // rock beats scissors
    // scissors beats paper
    // ties are ties

    if ((computer === "Paper" && player === "Rock") ||
        (computer === "Rock" && player === "Scissors") ||
        (computer === "Scissors" && player === "Paper")
    ) {
        return "Computer";
    }

    else if ((player === "Paper" && computer === "Rock") ||
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "Player";
    }

    else if (player === computer) {
        return "Tie";
    }

}

function sayWinner(computer, player) {

    // computer holds computerChoice
    // player holds playerChoice




}

function quitGame() {
    console.log("Thanks for playing!  Goodbye!")
}