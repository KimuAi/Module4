import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let zijde1;
let zijde2;

do
{
    zijde1 = parseFloat(await userInput.question("Geef het hoogte in: "));
    zijde2 = parseFloat(await userInput.question("Geef het breedte in: "));

    if(zijde1 == zijde2)
    {
        console.log("Dit is geen rechthoek!");
    }

}while(zijde1 == zijde2);


for(let a = 0; a < zijde1; a++)
{
    for(let b = 1; b < zijde2; b++)
    {
        process.stdout.write(" * ")
    }
    console.log(" * ");
}