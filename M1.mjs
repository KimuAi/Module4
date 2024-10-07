import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 
let number = 4;

for(let a = 1; a <= number; a++)
{ 
    for(let b = 1; b <= a; b++)
    {
    process.stdout.write("" + a );
    }
    console.log(" ")
}