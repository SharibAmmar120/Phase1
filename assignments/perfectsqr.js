var readlineSync = require('readline-sync');
var num=readlineSync.questionInt('Enter the Number : ');
var perfectsqr = (num**(1/2));
if(num**2){
    console.log('Number is perfect square');
}else{
    console.log('Number is not perferct');
}