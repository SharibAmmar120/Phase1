//CODE

var obj={
  
}
obj.a= [9,99,999]
obj.b=[1,2,3,4,5]
obj.c=['abc',{a:11,b:1}]
console.log(obj);
console.log(obj.c[1].a);



/*
a:[9,99,999],
b:[1,2,3,4,5],
c:['abc',{a:11,b:12}]
*/


//Type 1
//For in loop
//(Used to get the keys of an particular object)
//Keys
for(key in obj){
    console.log(key);//Only getting keys
}

//Values
for(key in obj){
    console.log(key,obj[key]);//Keys and values
    //               values
}


//Type 2(Convert into form of array)
var keys=Object.keys(obj)
//storing       name of object
console.log(keys);

var values=Object.values(obj)
console.log(values);


//Spread Operator(Convert array to object)
let arr=[1,2,3,4,5]
let object2={...arr}
console.log(object2);