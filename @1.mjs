import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte;
let breedte;

do {
    hoogte = parseFloat(await userInput.question("Geef de hoogte in: "));
    breedte = parseFloat(await userInput.question("Geef de breedte in: "));
}while (hoogte <= 0 || breedte <= 0); 

for (let a = 0; a < hoogte; a++) {
    for (let b = 1; b <= breedte; b++) {
        if (a === 0 || a === hoogte - 1) {
            process.stdout.write("*"); 
        } else {
            if (b === 1 || b === breedte) {
                process.stdout.write("*");
            }else {
                process.stdout.write(" "); 
            }
        }
    }
    console.log(); 
}
