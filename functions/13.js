//CODE
//Given array of +ve as integer elements.print out the count of prime numbers and narcissitic number from array and remove the element from array

function filterArr(arr){
    var p=0;
    var n=0;
    for(var i=0;i<arr.length;i++){
        if(isPrime(arr[i])) p++
       
        if(armStrongCheck(arr[i])) n++
        if(isPrime(arr[i])||armStrongCheck( arr[i])){
            arr.splice(i,1)
            i--
        }
    }
    console.log(`Total prime numbers are ${p}`);
    console.log(`Total Armstrong Number are ${n}`);
    console.log(arr);
}

function isPrime(num){
    var flag=true;
    if(num==1)return false
    for (var i=2;i<num;i++){
        if (num%i==0){
            flag=false;
            
        }

    }
    return flag
}

function armStrongCheck(num){
    var numArr=num.toString().split("")
    var digitCount=numArr.length
    var sum=0;
    for(var i=0;i<digitCount;i++){
        sum=sum+(numArr[i]**digitCount)
    }
   return (sum==num)?true:false
}
filterArr([10,20,30,40,2,4,7,153,1024,1654,11])

module.exports={ //Old JS ES5, exporting functions
    isPrime:isPrime,  //Hello:isPrime(Naming is not important)
    armStrongCheck:armStrongCheck// We can directily pass functions{ armstrongCheck,isPrime}
}