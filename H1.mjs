import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question(("kies uit rock, paper and scissors: "))
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(computerChoice)

// We bekijken deze syntax in module 6, momenteel kan je gewoon copy/pasten