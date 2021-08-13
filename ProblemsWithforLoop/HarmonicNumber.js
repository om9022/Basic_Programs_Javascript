const { CONNREFUSED } = require("dns");

prompt = require("prompt-sync")();
let number = prompt("Enter a nu,mber which you want Harmonic");

let harmonic =0;
for (let i=2 ; i <= number; i++){
    harmonic += 1/i;
} 
 console.log(harmonic);