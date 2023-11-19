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
let highScore = 0;
let lowScore = 0;

// set up GUI

//create buttons

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', function(){ game("Rock"); });
paperButton.addEventListener('click', function(){ game("Paper"); });
scissorsButton.addEventListener('click', function(){ game("Scissors"); });

const gameOutput = document.querySelector('.gameresults');

    const gameNumberDisplay = document.createElement('div');
        gameNumberDisplay.textContent = "Select a weapon!";
        gameNumberDisplay.setAttribute("id", "gamenumber");
        gameOutput.appendChild(gameNumberDisplay);

    const playerChoiceDisplay = document.createElement('div');
        playerChoiceDisplay.setAttribute("id", "playerchoice");
        gameOutput.appendChild(playerChoiceDisplay);

    const computerChoiceDisplay = document.createElement('div');
        computerChoiceDisplay.setAttribute("id", "computerchoice");
        gameOutput.appendChild(computerChoiceDisplay);
        
    const battleResultDisplay = document.createElement('div');
        battleResultDisplay.setAttribute("id", "battleresult");
        gameOutput.appendChild(battleResultDisplay);

    const overallWinnerDisplay = document.createElement('div');
        overallWinnerDisplay.setAttribute("id", "overallwinner");
        gameOutput.appendChild(overallWinnerDisplay);



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

            gameNumberDisplay.textContent = "Game #" + gameNumber;
            playerChoiceDisplay.textContent = "You chose: " + player;
            computerChoiceDisplay.textContent = "Computer chose: " + computer;
 
        //handle a tie, and output the result message

        if (winningWeapon === "Neither") {
            battleResultDisplay.textContent= "It's a Match! This round's a tie!";
        } else {
            battleResultDisplay.textContent = winningWeapon + beats + losingWeapon + ": " + winningPlayerMessage;
        }

        //update running score
        console.log("Score: Computer " + computerScore + "; Player " + playerScore);


        //determine victor

        if (playerScore === computerScore) {
            victor = "it's a tie";
            highScore = playerScore;
            lowScore = computerScore;
        } else if (playerScore > computerScore) {
            victor = "the player";
            highScore = playerScore;
            lowScore = computerScore;
        } else if (playerScore < computerScore) {
            victor = "the computer";
            highScore = computerScore;
            lowScore = playerScore;
        } else {
            victor = "error";
        }

        overallWinnerDisplay.textContent = "Current overall winner: " + victor + " (" + highScore + "-" + lowScore + ")!";

        gameNumber++;
    }

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