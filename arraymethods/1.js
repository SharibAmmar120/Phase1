//Programming Paradigm
//A programming paradigm is a fundamental style of programming

/*Types of paradigm
1.Imperative(if,for loop,while loop)
Imperative language is when you say how to get what you want

2.Declartive(it falls under functional paradigm)(Array helper: Map,filter,reduce)
Declartive programming is when you say what you want

3.Functional

4.Object Oriented(Creating classes)

*/

//Imperative approch
var arr=[1,3,4,55,66,68]

for(var i=0;i<arr.length;i++)
console.log(arr[i]);


//Declarative approch(Array helper method)
//Anonymous Function
arr.forEach((ele,i)=>{ //To get the element we do ele,to get index we do i
    console.log(ele,i);
})