//CODE 

var readlineSync = require('readline-sync')
var weekday = readlineSync.question('Enter the Number : ')

switch(weekday) {
    case '0':
        console.log("Sunday")
        break;
    case '1':
        console.log("Monday")
        break;
    case '2':
        console.log("Tuesday")
        break;
    case '3':
        console.log("Wednsday")
        break;
    case '4':
        console.log("Thursday")
        break;
    case '5':
        console.log("Friday")
        break;
    case '6':
        console.log("Saturday")
        break;
    default:
        console.log("Invalid Input");

}

