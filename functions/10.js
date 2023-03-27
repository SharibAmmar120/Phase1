function isPrime(num){
    var flag=true
    for (var i=2;i<num/2;i++){
        if (num%i==0){
            flag=false;
            
        }

    }
    return flag
}console.log(isPrime(700));