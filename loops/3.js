//For Loop

for(var i=1; i<=10; i++){ // We are performing Variable initialisation,Declartion, Condition & Increment all in one Statement
//    1        2     4
    console.log(i); 
//              3
}

/*
1. Assigning the value of 1 to i
2.it will check if the value assigned satisfies the condition
3.if it satisfies the condition it will go to block statment and perform console.log 
4.After reaching end of the block it will perform the increment operation (After itration it will check the condition again)
*/


// for( var i=-1000;i<=-1000;i--){
// console.log(i)}

//To keep a Track 

var count=0;
for(var i=0;i<=100;i++){
    console.log(i);
    count++
}
console.log("count" + count);

//Multiple of 3

for(var i=0; i<=1000; i++){
    if(i%3==0)console.log(i);
}