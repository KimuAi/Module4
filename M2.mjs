import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let startTop = parseFloat(await userInput.question("True or false?"))
let startLeft = parseFloat(await userInput.question("True or false?"))
let height = 3;

if (startTop == true && startLeft == true) 
{
    for (let a = 1; a <= height; a++) 
    {
      for (let b = 1; b <= a; b++) 
    {
    process.stdout.write( "*")
    }
      console.log(" ");
    }
}
  
if (startTop == false && startLeft == true) 
{
    for (let a = height; a >= 1; a--) {
    
    for (let b = 1; b <= a; b++) 
    {
    process.stdout.write( "*")
    }
      console.log(" ");
    }
}