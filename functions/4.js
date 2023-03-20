//3.Fat Arrow function(new version)

var strAt = str => { //We don't use function keyword(Replacing the function keyword with fat arrow)
    console.log(str[6]);
    console.log(str.charCodeAt(5));
}
strAt("Hello World")
strAt("Hi World ")

var mult = (a, b, c) => {
    return a * b * c 
}
let output = mult(3, 4, 5)
console.log(output);