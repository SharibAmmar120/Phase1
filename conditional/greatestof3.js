var readlineSync=require("readline-sync");

let num1=readlineSync.questionInt("Enter Number1 : ")
let num2=readlineSync.questionInt("Enter Number2 : ")
let num3=readlineSync.questionInt("Enter Number4 : ")

//Conditions
//Num1 is greatest num1 > num2 and num1 > num3
//Check if num2 >num3 ,true => num2 is greatest
//False num3 is greatest
var greatest = (num1>num2 && num1>num3) ? num1 : (num2 > num3) ? num2 : num3;
console.log(greatest);