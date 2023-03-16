//Initialising a varaible in JS

var a;
a=60;

// Initialisation is insitialising and declaring the value in same line

var a=60;
console.log(a);

//Assinging and declaring 4 different variables in one line
var b,c,d,e=20;
// it will only consider e=20
console.log(b,c,d,e,);

//To assign each value to all
var b=20,c=20,d=20,e=20;
console.log(b,c,d,e);


// Adding two Variables
var number=100;
//Intialised a variable of number and assigned the value 100 

var add = number+a;
console.log(add);



//Rules for Variabel Names
/*
Valid Vraibles
1.Lower Case(a-z)
2,Upper Case(A-Z)
3.Numbers(Numerical Characters(0-9))
4.Symbol Characters(_,$)

Invalid Variables
1.No whitespace ( var add two=20)
2.Cannot use keyword or Reserved word (if,else,break=> var for=100)
3. Special characters (var sharib@gmail)
4.Variable cannot start with a number (var 50cent=50)
*/

/*
Examples of Valid and Invalid Variable Names
abc-valid
ABC-valid
ABCD-valid
123ABcd-invalid (Cannot start with a number)
ab&23E-invalid
12bye-invalid
_abc-valid
do_while-valid
for-invalid
in-invalid
abc!-invalid
*/

//Semantics to keep in mind
// Use camel case for Varibale
// code for india=>codeForIndia
//sharibAmmar
//It should not start with capital letters
//SHOULD MAKE SENSE

