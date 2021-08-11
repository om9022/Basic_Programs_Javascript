const prompt = require("prompt-sync")();
let month = prompt("Enter a Month")
let day = prompt("Enter a Day")
if ((month) => 3 && month < 7 && day > 0 && day <= 32){
    if (day > 20 && month == 3 ){
        console.log("true")
    }else{
        if(month == 4 || month ==  5){
        console.log("true");
    }else{
        if(day < 20 ){
            console.log("true");
        }   else{
            console.log("false");
        }
    }    
}
}else {
    console.log("false");
}
