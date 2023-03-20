var b = [1,2,3]
// console.log(b);
b[b.length] = 4
// console.log(b);

//PUSH
// it is a method used for adding elements to the end of an array

b.push(5)
b.push(100)
b.push("sharib")
console.log(b);

//POP
//Used to remove an element from the end of an array

b.pop();
console.log(b);

//Shift 
// Removes an element from the start of the array
var value = b.shift()
console.log(b);
// console.log(value);


//Unshift
//Adds an element to the first of the array
b.unshift(200, 300, 400)
console.log(b);

//whatever we shift or pop we can save them in a variable so they return those values 