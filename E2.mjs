import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Wat is uw start nummer: "));
let end = parseFloat(await userInput.question("wat is uw eind nummer: "));

let deler1 = parseFloat(await userInput.question("Geef deeler1: "));
let deler2 = parseFloat(await userInput.question("Geef deeler2: "));

for(let a = start; a <= end; a++)
{
    if(a % deler1 == 0 && a % deler2 == 0)
{
    console.log(a + " Het getal is deelbaar door " + deler1 + " en " + deler2)
}
}
