//Strings("Group of Characters")

var a ="Hello Class,"// Declaring a variable

var b="Welcome JS"
console.log(a+b);// It will concatinate a & b

/* 
Different ways to write a String
1. Double Quotes - ""
2.Single Quotes - ''
3.Backticks- `` ->These are new addition to Java Script, these are used for String Pollination

*/

var d=40, e=30, f=10;
var sum = d + e + f;//Storing in a varaible and doing addition
console.log(sum);

console.log("The sum of d="+d+", e="+e+", f="+f+" is => sum="+sum);//Giving the Values of d,e,f adn sum or verifying and giving the values (Traditional way)


//String Pollination:
console.log(`The sum of d=${d}, e=${e}, f=${f} is sum=${sum}`);//Other way of represtation of values, The value of these is shown in these particular String {}



let greeting = "Hello World"// Length of String is 11 (Strins have built in length property)
console.log(greeting.length);// . Length is a built in property which will return Length of a String
//String has index and will represent each and every character in Strings and arrays
console.log(greeting);//Starting index is 0 and last index is length-1, In the above H has 0 index E has 1
console.log(greeting[4]);//To target any particular value we use [], 4 index has o
console.log(greeting[12]);//if its outide the scope we will get undefined


console.log(greeting.charAt(4));//Other method to return the value at certain index
console.log(greeting.charAt(10));

//To find the character is present in a string or not
console.log(greeting.indexOf('e'));//It will give index of particular letter
console.log(greeting.indexOf('h'));//if it does not find the index of particular string it will output as -1(It is case Sensitive)


//Slice : it takes 2 parameter, starting index and till where you want the next letter. it is for both Strings and Arrays(Extract and a portion of a string return a new string)
console.log(greeting.slice(0,5));// 0 is H and we want till space so we take 5 we get Hello
// console.log(greeting.splice(-1));//Return the last Character


//toLowerCase && toUpperCase && Capitalize
console.log(greeting.toLocaleLowerCase());
console.log(greeting.toLocaleUpperCase());

//CODE
//hackingschool=>Hackingschool
let word="hackingschool";
let firstLetter=word.charAt(0);
firstLetter=firstLetter.toUpperCase();
let secondLetter=word.slice(1);
secondLetter=secondLetter.toLowerCase();
console.log(firstLetter+secondLetter);
 console.log(word.charAt(0).toUpperCase()+word.slice(1));

 //Trim 
 var text="    Hello   ";
 console.log(text.trim());
 console.log(text.trimEnd());

 //Repeat
 var word2 ="abc";
 console.log(word.repeat(10));

 //To change particular word
 var str = "Hello class, it is a cold day"
 console.log(str.replace("old","warm"));
 console.log(str);

 //Concat
 console.log("Hello+World");
 var hello="hello"
 console.log(hello.concat("world"));


 //String to ASCII
 let str2="aeroplane"
 console.log(str2.charCodeAt(0));

 //String to Array

 let str3="coding"
 console.log(str3.split(""))



