//Giving Input using Command line

//var value=prompt("Enter any thing")//Prompts is specific for browser environment 
//console.log(value);

//Readline-Sync :It is used in node js Environment(it is a pacakge,We use readlineSync package to take inputs from command line)

var readlineSync=require('readline-sync')// we are in this particular project, we require this package called readline-Sync(We can use this to call methods of special function that are present in that package)

//var userName=readlineSync.question('May I have your name ?')//Question:it takes String input and gives the value as String
//console.log(userName);//Whatever value we enter it got stored in variable username
//console.log(typeof(userName));


//CODE Adding two numbers
let num1=readlineSync.questionInt('Please enter a number')
let num2=readlineSync.questionInt('Please enter a number')
console.log(num1+num2);
console.log(typeof(num1));

console.log(".................");
console.log('\t Add 2 Numbers');
console.log("................."); 

 /*
//Different Statemts in JS

Declarative Statemet : var a=60

BlocK Statements : Statements in {}

Conditional Statemenst: if, if else ,else

Switch Statements

Looping Statements: for loop, do while loop, for loop

Function Statements

 */


