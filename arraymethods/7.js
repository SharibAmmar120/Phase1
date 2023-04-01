//Sorting  and Shuffling
/*
Sort : It will check according to ASCII Table in decimal order and arrange it accordingly
The comparison is happening in unicodes
it will take +ve,-ve and 0 values
*/
var arr=["Saab","Volvo","bMw","Audi"]
console.log(arr);
arr.sort()
console.log(arr);

var arr2=["Abc0","ABC","BBc","AAA"] //First it will check the firt letter and again it  will check second letter and arrange it 
arr2.sort().reverse()//.reverse() will put in revere order
console.log(arr2);