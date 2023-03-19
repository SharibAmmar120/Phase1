//CODE Multiples of 3 & 5
var readlineSync = require('readline-sync')
var num = readlineSync.questionInt("Enter the Number : ")
if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num} is a multiple of 3 & 5`);
} else if (num % 5 == 0) {
    console.log(`${num} is multiple of 5`);
} else if (num % 3 == 0 ) {
    console.log(`${num} is a multiple of 3`);
} else {
    console.log(`${num} is not a multiple of 3 & 5`);
}
