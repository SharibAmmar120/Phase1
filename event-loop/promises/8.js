function abc(num1 , num2 ){
    //Creating Custom Promise : can be create dusing a function or an object
    return new Promise((resolve,reject) => {//resolve and reject are function callbacks
        if(num1 < num2){
            resolve(`${num1} is less than ${num2}`)//it goes to .then, resolve are like return statement
        }else if(num1 > num2){
            resolve(`${num2} is less than ${num1}`)
        }else{
            reject("Both are equal")//it goes to catch block
        }
    })
}

console.log("The start");
abc(55,2)
    .then((msg)=>{ //string msg
        console.log(msg);
    })
    .catch(err => {
        console.log("calling from here")
        console.log(err)
    })

    console.log("The end");









/* 
Promise has 3 stages :
 1) Pending=>whenever a promise is created it will be pending by default
 2) Fullfilled=>if it is satisfied it goes to fulfilled in this case resolve goes to .then to fulfill it's like a return 
 3) Rejected
*/