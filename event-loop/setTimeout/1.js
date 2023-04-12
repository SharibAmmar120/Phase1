function abc(){
console.log("abc");
}
console.log("start");
abc()
setTimeout(()=>{  //Asynchronous
    console.log("Welcome to first Node JS");
},2000)  //Syntax for SetTimeout for 2 sec later
console.log(123);
console.log("end");
setTimeout(()=>{
    console.log("Welcome to second Node JS");
},1000)
//In sync/blocking it will not proceed to next line until the previous line is executed
//Without Event-loop Asynchronous is not possible
//setTimeout takes another function or callback function
//Taking function as arguments