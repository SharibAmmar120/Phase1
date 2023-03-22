//.concat
var fruits=["apple","banana"]
var moreFruits=fruits.concat("orange","mango","Kiwi")
console.log(fruits);
console.log(moreFruits);

//.join(it converts array to string)
let joinedFruits=fruits.join(" ")//(Whatever we put in quotes lik -, space it will print it)
console.log(joinedFruits);

//.reverse(reverse the order of array)
var reversedFruits =fruits.reverse()
console.log(reversedFruits);

//.indexof(Gives the index of element )
var index=fruits.indexOf("banana")//if it does'nt contain any thing it will give -1
console.log(index);

//.last index
var lastIndex=fruits.lastIndexOf("banana")
console.log(lastIndex);



// two objects printed false
// it is passed by refernce it is not passed by value
// bacause they are not stored at same memory location