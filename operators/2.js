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



console.log(true>false);// true equates to value of 1 and false equates to value of 0
console.log(false>true);

console.log(undefined == 0);// Undefined is not defined so it will be false
console.log(""===0);//Strict check 

var a=5,b=-3,c=-6
console.log(c < b < c);//Numerical value of true is 1, when we compare b & c which is true it's value will be 1. So 1<-6 which is false
console.log(c < b < a);
console.log(c > b < a);
console.log(a > b < c);
console.log(b < a < c);
console.log(c < c < c);


//String to number
console.log(typeof(+"233"));//+Sign is converting String to Number
console.log(typeof(+"asdasd"));//It will type cast to a number

//Number to String
console.log(typeof(300).toString());//.toString method is convertimg Number to String

let d="asdasd"
d =+d//+ is conveting to special value NaN, but it holds a numerical value 
console.log(typeof(+d));
console.log(d);

console.log(true!=false);
console.log(""!=null);


//Logical  Operator
console.log(5 < 100 && 100 > 10 && 12 < 10);//Compares 5<100 and if true it will take value as 1 and goes to next and then perform && operation, if it fails at any point it will exit
console.log(12 < 10 || 100 >10 || 5 < 100);//A soon it gets the true value which is 1 it will exit( It will continue till it gets the true value)
console.log(100 || 40 || 9 || 15); // When we do Comparison it will return True or False but when we do &, || it will return truty value( || will keep in looking for truthy value)
console.log(100 && 40 && 9 && 15)
console.log("" || 0 || undefined || null || NaN || "hi");//All are falsy values and it will reach to hi because it's a truthy value
console.log("" && 0 && undefined && null && NaN && "hi");//The moment && gets false value it gives the out put
console.log("asdkasd" && 0 && undefined && null && NaN);

/*
Falsy values

0
"" Empty String
null
undefined
false
null
*/


//Logical Not ! (Whatever value we get after comparion it will give inverse of it)


console.log(!(5 < 100 && 100 > 10 && 12 < 10));
console.log(!(12 < 10 || 100 >10 || 5 < 100));
console.log(!(100 || 40 || 9 || 15)); 
console.log(!(100 && 40 && 9 && 15))
console.log(!("" || 0 || undefined || null || NaN || "hi"));
console.log(!("" && 0 && undefined && null && NaN && "hi"));










