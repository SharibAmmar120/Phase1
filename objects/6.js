//CODE Write a function,
//Considering an object with only numerical values
//return the sum values

let obj={a:2,b:4,c:9}

function sumProperties(object){
    var sum=0;
    for (key in object){
        sum += object[key]//Getting the value(0+2,0+4)
    }
    return sum
}
console.log(sumProperties(obj));


