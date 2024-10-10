import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let winningCountComputer = 0; 
let winningCountUser = 0;

do {
    let userChoice = await userInput.question("Kies uit rock, paper en scissors: ");
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice) 

    if (userChoice === computerChoice){
        console.log("Draw!");

    }else if (userChoice === "scissors" && computerChoice === "paper"){
        console.log("User won!");
        winningCountUser++;
    }else if(userChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer won!");
        winningCountComputer++;

    }else if(userChoice === "paper" && computerChoice === "rock"){
        console.log("User won!");
        winningCountUser++;
    }else if (userChoice === "rock" && computerChoice === "paper"){
        console.log("Computer won!");
        winningCountComputer++;

    }else if(userChoice === "rock" && computerChoice === "scissors"){
        console.log("User won!");
        winningCountUser++;
    }else if(userChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer won!");
        winningCountComputer++;

    }else{
        console.log("Ongeldige keuze, probeer het opnieuw.");
    }

} while (winningCountComputer < 3 && winningCountUser < 3);

console.log("Eindstand: User" + winningCountUser + "- Computer " +  winningCountComputer );