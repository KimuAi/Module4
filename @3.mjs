import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef hoogte in: "));
let outline = await userInput.question("Outline? true of false? ") === "true";  

for (let a = 1; a <= hoogte; a++) {
    let rij = '';
    
    for (let b = 1; b <= (hoogte - a); b++) {
        rij += ' ';
    }

    if (outline && a > 1 && a < hoogte) {
        rij += '*'; 
        for (let c = 1; c <= (2 * a - 3); c++) {
            rij += ' ';
        }
        rij += '*';  
    } else {
        for (let d = 1; d <= (2 * a - 1); d++) {
            rij += '*';  
        }
    }
    console.log(rij);  
}
for (let a = hoogte - 1; a >= 1; a--) {
    let rij = '';
    
    for (let b = 1; b <= (hoogte - a); b++) {
        rij += ' ';
    }

    if (outline && a > 1 && a < hoogte) {
        rij += '*'; 
        for (let c = 1; c <= (2 * a - 3); c++) {
            rij += ' ';
        }
        rij += '*';  
    } else {
        for (let d = 1; d <= (2 * a - 1); d++) {
            rij += '*';  
        }
    }

    console.log(rij);  
}
