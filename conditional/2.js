//CODE Compare two Numbers
let num1=readlineSync.questionInt("Enter Number1 : ")
let num2=readlineSync.questionInt("Enter Number2 : ")

if (num1>num2) {
    console.log("Number1 is greater");
}else if (num2>num1) {
    console.log("Number2 is greater");
} 
else {
    console.log("Both are equal");
    
}