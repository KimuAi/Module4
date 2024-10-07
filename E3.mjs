import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Wat is uw start nummer: "));
let end = parseFloat(await userInput.question("wat is uw eind nummer: "));

let deler1 = parseFloat(await userInput.question("Geef deeler1: "));
let deler2 = parseFloat(await userInput.question("Geef deeler2: "));

let deelbaar1 = deler1
let deelbaar2 = deler2

for(let a = start; a <= end; a++)
{
    if(a % deler1 == 0 && a % deler2 == 0)
    {
        console.log( a + " Dit getal is enkel deelbaar door " + deler1 + " en " + deler2);
    }
    else if(deler1 > deler2)
    {
    if(a % deelbaar1 == 0)
        {
        console.log(a + " Dit getal is enkel deelbaar door " + deler1);
        }
    else if(a % deelbaar2 == 0)
        {
        console.log(a + " Dit getal is enkel deelbaar door " + deler2);
        }
    } 
    else if(deler1 < deler2)
    {
    if(a % deelbaar2 == 0)
        {
        console.log(a + " Dit getal is enkel deelbaar door " + deler2);
         }
    else if(a % deelbaar1 == 0)
        {
        console.log(a + " Dit getal is enkel deelbaar door " + deler1);
        }
    }
}
