// function abc(age){ //using a function
//     console.log("hi");
//     return new Promise((resolve, reject)=>{
//         if(age >= 19){
//             resolve("You are a teen");
//         }else{
//             reject("You are a kid")
//         }
//     })
// }

var obj = new Promise((resolve, reject)=>{ //using an object
    if(25 >= 19){
        resolve("You are a teen");
    }else{
        reject("You are a kid")
    }
})

console.log("I am first");

obj
.then((data) =>{
    console.log(data);
})
.catch(err => console.log(err))

console.log("I am last");