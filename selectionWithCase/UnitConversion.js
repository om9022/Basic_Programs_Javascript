prompt = require("prompt-sync")();
let value = prompt("Enter a unit you want to convert: ")
let choice = prompt("1. Feet to inch /n 2.feet to meter/n 3. inch to feet/n 4.meter to feet")

switch (choice) {
    case "1":
        result = value * 12;
        break;
    case "2":
        result = value * 0.0833;
        break;
    case "3":
        result = value * 0.3048;
        break;
    case "4":
        result = value * 3.28;
        break;
    default:
        result = "Invalid "
        break;
}
console.log("result " + result);
