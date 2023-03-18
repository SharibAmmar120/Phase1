var readlineSync=require("readline-sync");

let num1=readlineSync.questionInt("Enter Number1 : ")
let num2=readlineSync.questionInt("Enter Number2 : ")

console.log("...........................");
console.log("Simple Calculator for Maths");
console.log("...........................");
console.log("\t Press + for Addition \n \t Press * for Multiplication");

var symbol=readlineSync.questionInt("Enter which action you want to perform")

switch(symbol){  //switch will take input(symbol and it has different cases
    case '+' :   //if the input is + the below code will be excecuted
        console.log(num1+num2);
        break;   //Break statement will stop the flow of execution
        case '*': //if the input is * the below code will be excecuted
            console.log(num1*num2);
            break;
            default: //if its neither + or * this case will be executed
            console.log("Invalid input ");
            break;
            //(if the expression matches the value that particular case will be executed )
}