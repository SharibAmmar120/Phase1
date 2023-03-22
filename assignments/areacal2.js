var readlineSync = require('readline-sync');
console.log("--------------------------")
console.log("Area Calculator")
console.log("--------------------------")
console.log("\t Press 1 for Area of Square \n \t Press 2 for Area of Circle \n \t Press 3 for Area of Rectangle \n \t Press 4 for Area of Triangle")
var calculator = readlineSync.question('Please enter preferred calulator: ');
switch (calculator){
    case '1':
        console.log("Formula : S*S");
        let num1 = readlineSync.questionInt("Enter number 1: ")
        console.log(num1**2);
        break;
    case '2':
        console.log("Formula : 3.14*r**2");
        let num2 = readlineSync.questionInt("Enter number 1: ")
    console.log(3.14 * (num2) **2);  
        break;
    case '3':
        console.log("Formula : A=W*L");
        let num3 = readlineSync.questionInt("Enter number 1: ")
        let num4 = readlineSync.questionInt("Enter number 2: ")
    console.log(num3 * num4);
    break;
    case '4':
        console.log("Formula : (1/2)*(L*B)");
        let num5 = readlineSync.questionInt("Enter number 1: ")
        let num6 = readlineSync.questionInt("Enter number 2: ")
        console.log((1/2) * (num5*num6));
        break;
        default:
            console.log("Invalid input");
            break;
}
