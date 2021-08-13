prompt = require("prompt-sync")();
let digit = prompt("Enter a number")
if(digit < 10){
    console.log("Unit")
}
else if( digit < 100){
    console.log("Ten")
}
else if(digit < 1000 ){
    console.log("Hundred")
}
else if(digit < 10000){
    console.log("Thousand")
}