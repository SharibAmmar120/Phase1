//Functions

/*
Functions are reusable components
In JS all function are First class Functions i.e each and every single function return as value
Function are simple block of code that can be invoked and executed
They are used to perform a specific task and return a value or print a value
Function name can be any variable name (abc,greeting)
Function is defined with function keyword (function)
Function can aslo take parameter
*/

//Syntax
/*
function fname(){
    //statement
}
*/
//There are two things in a function
//1.Function declaration
//2.function call

//Types
//1.Function with no parameters
//2.Function with parameters

function abc(){
//keyword  name 
}   //(This is the body of a function)

//Function without parameters(Type 1)
function greeting(){
    console.log("Hello"); //(This is function declataion)
}
greeting() //Trigger the function (Whenever the greeting is called Hello will be printed)


//Function with Parameters(Type 2)
function greeting2(name){
    console.log("Hi "+ name);
}
greeting2("Sharib")// The value Sharib gets inside the variable called name and it has the particular variable sharib


function fullName(fname,lname) {
    console.log(fname,lname);

}
fullName("Sharib", "Ammar")


function value() {
    return 5; //5 will get stored where the function is being called
    
}
let five=value()
// console.log(value());
console.log(five);


//Sum of two numbers

function sum(a,b) {
    return a+b; //Return value will be placed in sum1
}
let sum1=sum(5,6)//Storing
console.log(sum1);


//CODE function is Even or odd

function evenOdd(no){ //no is parameter
    if((no%2)==0) console.log("Even")
        else console.log("odd")
}
let res=evenOdd(4) //4 is argument (We call a function and pass the value is called arguments )
console.log(res);


//with return
function isEven(num){
if((num%2)==0) return true;//** Whenever we use Return either we have to store it or we have to use console.log
//if the condition is satisfied it will stop the function; if it is false will go to next line and return false
else return false;// return will exit or stop the function

}
let result=isEven(5)
console.log(result);
