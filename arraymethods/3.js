//SLICE
let fruits=["apple","banana","orange","lemon"]

var citrus=fruits.slice(2,4) //method returns selected elements in an array, as a new array.
                             //method selects from a given start, up to a (not inclusive) given end.

                             //method does not change the original array.
console.log(fruits);
console.log(citrus);

//SPLICE
//Changes the content of array by removing or replacing existing element

let remove=fruits.splice(2,2,"mango","kiwi")//Can also add
                      //start and how many we and to remove, can also remove last elements by using -1
console.log(fruits);
console.log(remove);