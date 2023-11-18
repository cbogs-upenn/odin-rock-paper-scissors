'use strict';

// run the game
game();


function game() {

    // play five rounds; keep score
    // report winner

    let computerScore = 0;
    let playerScore = 0;
    let victor = "";
    let winningWeapon = "";
    let losingWeapon = "";
    let beats = "";
    let winningPlayerMessage = "";

    for (let i = 1; i <= 5; i++){

        //get our weapons from the respective functions
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        
        //check for valid playerChoice and force a re-entry if invalid
        while (player === "mismatch"){
            alert("Invalid choice, choose again.");
            player = getPlayerChoice();
        }

        //determine the winner and set some variables to handle the victory message
        let winner = findWinner(computer, player);
        
        if (winner === "Computer"){
            computerScore++;
            winningWeapon = computer;
            losingWeapon = player;
            winningPlayerMessage = "Computer wins!";
        }
        else if (winner === "Player"){
            playerScore++;
            winningWeapon = player;
            losingWeapon = computer;
            winningPlayerMessage = "Player wins!";
        }
        else if (winner === "Tie"){
            winningWeapon = "Neither";
        }

        //handle the specific language for the game 
        switch (winningWeapon){
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

        console.log("Game " + i);
        console.log("Computer: " + computer + ", Player: " + player);

        //handle a tie, and output the result message

            if (winningWeapon === "Neither"){
                console.log("It's a Match! This round's a tie!");
            } else {
            console.log(winningWeapon + beats + losingWeapon + ": " + winningPlayerMessage);
            }        

        //update running score
        console.log("Score: Computer " + computerScore + "; Player " + playerScore);
        
        }

    //determine victor

    if (playerScore === computerScore){
        victor = "nobody: it's a tie";
    }else if (playerScore > computerScore) {
        victor = "the player";
    }else if (playerScore < computerScore){
        victor = "the computer";
    }else{
        victor = "error";
    }

        console.log("Victory goes to " + victor + "!!!");

    }


// FUNCTIONS BEGIN HERE


function getComputerChoice() {

    //CHOOSE rock, paper, or scissors randomly for the computer player

    let computerChoice = chooseWeapon();
    return computerChoice;   

}

function getPlayerChoice() {
   
    // GET player choice of rock, paper or scissors
    let playerInput = prompt("Rock, Paper, Scissors?","");

    // REGULARIZE input
    let playerChoice = regularize(playerInput);
    switch(playerChoice) {
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


function chooseWeapon() {

    let weaponNum = (Math.floor(Math.random() * 3)); // 0 Rock, 1 Paper, 2 Scissors
    switch(weaponNum) {
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

function regularize(input) {
    let firstLetter = input.slice(0,1).toUpperCase();
    let remainder = input.slice(1, input.length).toLowerCase();

    let newString = firstLetter + remainder;

    return newString;
  }


function findWinner(computer, player){
    // EVALUATE which player wins
    // paper beats rock
    // rock beats scissors
    // scissors beats paper
    // ties are ties

    if ((computer === "Paper" && player === "Rock")||
        (computer === "Rock" && player === "Scissors")||
        (computer === "Scissors" && player === "Paper")
        ) 
    {
        return "Computer";
    }

    else if ((player === "Paper" && computer === "Rock")||
    (player === "Rock" && computer === "Scissors")||
    (player === "Scissors" && computer === "Paper")
    ) 
    {
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