//CODE  write a function that takes object as a parameter that return the length of keys


let person={name:"John",age:30,address:{street:"mainst",city:"New York",state:"NY"}};

function counProperties(object){
    let keys=Object.keys(object)
        console.log(keys.length);
        return keys.length
    
}
console.log(counProperties(person));