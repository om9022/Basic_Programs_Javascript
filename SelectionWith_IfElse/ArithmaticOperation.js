// Defines numbers 
let a = 83;
let b = 7;
let c = 9;
// Takes arithmatic Expressions in variables 
exp1 = a + b * c
exp2 = a % b + c
exp3 = c + a / b
exp4 = a * b + c

let maximum = 0;
let minimum = 0;

// for maximum 
if(exp1 > exp2 && exp1 > exp3 && exp1 > exp4){
    maximum = exp1
}else if (exp2 > exp3 && exp2 > exp4){
    maximum = exp2
}else if(exp3 > exp4){
    maximum = exp3
}else {
    maximum =exp4
}

// for minimum 
if(exp1 < exp2 && exp1 < exp3 && exp1 < exp4){
    minimum = exp1
}else if (exp2 < exp3 && exp2 < exp4){
    minimum = exp2
}else if(exp3 < exp4){
    maximum = exp3
}else {
    minimum =exp4
}

console.log(`minimum value is ${minimum} and maximum value is ${maximum}`);