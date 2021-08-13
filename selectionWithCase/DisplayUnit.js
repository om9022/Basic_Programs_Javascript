prompt = require("prompt-sync")();
let number = prompt("Enter a number  : ")
let numberOfdigits = number.length;
switch (numberOfdigits) {
    case "1":
        console.log("units")
        break;

    case "2":
        console.log("tens")
        break;

    case "3":
        console.log("hundreds")
        break;

    case "4":
        console.log("thousands")
        break;
    default:
        console.log("Invalid Number")
        break;
}