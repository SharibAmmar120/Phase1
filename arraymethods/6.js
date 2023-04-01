function randomArray(n1,n2){
    var arr =new Array(10);
    for (var i=0;i<arr.length;i++){
    arr[i]=Math.floor(Math.random()*(n1-n2+1))+n2;
    }
    console.log(arr);
}
randomArray(10,45)

//45-10+1=36=35(mathfloor)
//0.99999*36=35.966
//Math.floor=35
//35+10=45

//Maximum value of math.random()=(0.9991)
//0.9991*36=35.996
//Math.floor=>35
//35+10=>45

//Minimum valueof Math.random()=0.0001
//0.0001*36=>0.00036
////Math.floor=>0
//0+10=>10(10-45)
