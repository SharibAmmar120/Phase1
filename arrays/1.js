//Arrays


/*
Array stores hetrogeneous value
Arrays are represented by []
Index of  every array starts from '0' by default
There is no max length for arrays
Array can store any kind of value

*/
var a = 1,  b=2, c=3,d=4, e=5, f = 6,  g = 7 , h = 8 , i = 9 , j = 10;

//Data Structure - Arrays

var arr = [1,2,3,4,5,6,7,8,9,10]
//         0,1,2,3,4,5,6,7,8,9 
//        -10,-9,-8,-7,-6,-5,-4,-3,-2,-1
console.log(arr[-10]);


console.log(arr[2])
console.log(arr);
console.log(arr.length);

var arr2 = ["Sharib", "Ammar", "Sarwar"];
console.log(arr2);

var mixed = [1 , 2, 3, "THS" , true  , null , undefined]
console.log(mixed.length);
console.log(mixed[4]);

var arr3 = new Array(10); // arr3 = [] we use new array syntax for declaring an empty array 
var arr3 = new Array([1,2,3]);

console.log(arr3.length);
console.log(arr3);