//Comparison Operators
/*

> 

<

==

<=

>=

!=

===

This will return boolean values,Output of this will be in Boolean values (True or False)
*/
var a=10,b=20;
console.log(a>b);
console.log(a<b);

console.log(30<40);
console.log(30<=30);
console.log(40>40);
console.log(40<(15*3));

console.log("100" ==(10 ** 2));// When there are == it doesnot looks at data type, it only looks at the value
console.log("100" === (10**2));//Now it checks the data type because ===checks data type;

//String to Number
console.log(Number("100"));//(Type casting)
console.log(+("100"));//Another way to type cast

var c = "1000";
console.log(typeof(c));
c +=c
c = c + c;
c =+c;//(Changing to number and adding it (type casting))
console.log(c);//Strings is JS will Concatinate

console.log(100 != (5*20));
console.log("100"!=(5*20));

console.log("ABC" =="abc");// Comparing ASCII Values

console.log(""== 0);//Empty Strings are considered as false values and 0 is also a falsy values