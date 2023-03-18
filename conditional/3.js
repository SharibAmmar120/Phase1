var i=1;
var j=1;
var k=1;

if(i==j){
    console.log('i is equal to j');
    if(j==k){
        console.log('i equals to k'); //Nesting inside another if Statement 
    }
}else{
    console.log('i does not equal j');
}

//OR use && operator for Nesting
if (i==j && j==k) {
    console.log('i equals to k');
} else {
    console.log('i does not equals to j');
}

//CODE Greatest of three Numbers

var num1=10;
var num2=20;
var num3=30;

if (num1>num2 && num1>num3) {
    console.log('Number1 is Greatest');
} else if(num2>num3){
    console.log("Number2 is Greatest");
}else if(num1==num2 &&  num2==num3){
    console.log();
}else{
    console.log("Number3 is Greatest");
}