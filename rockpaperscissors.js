'use strict';

/*
LOOP
CHOOSE rock, paper, or scissors randomly for the computer player
GET player choice of rock, paper or scissors
    REGULARIZE input
    CHECK whether input matches rock, paper, scissors, or quit (or r, p, s, q)
    IF input is Q then exit, ELSE continue
EVALUATE which player wins
    paper beats rock
    rock beats scissors
    scissors beats paper
    ties are ties
REPORT winner
REPEAT
*/

console.log("Computer choice: " + getComputerChoice());
console.log(getPlayerChoice());




function getComputerChoice() {

    //CHOOSE rock, paper, or scissors randomly for the computer player

    let computerChoice = chooseWeapon();
    return computerChoice;   

}

function getPlayerChoice() {
   
    // IF input is Q then exit, ELSE continue


    // GET player choice of rock, paper or scissors
    let playerInput = prompt("Rock, Paper, Scissors, Quit?","");

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
        
        case "Q":
        case "Quit":
            playerChoice = "Quit";
            break;

        default:
            playerChoice = "mismatch";
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