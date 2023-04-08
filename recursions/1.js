//Recursions

//A function that call's itself is called a recursion and it's called recursive function
//Stack=>Data Structure-FILO,LIFO

//Print Number 10-1 without loops
function print(num){
    if(num==0) return //Without this condition it will print -ve numbers and gives us stack exceeded(stack overflow)
    console.log(num);
    print(num-1)
    return num
}
var value=print(10)
console.log(value);