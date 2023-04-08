function isPrime(num){
    var flag=true
    if(num==1)return false;
    for (var i=2;i<num/2;i++){
        if (num%i==0){
            flag=false;
            
        }

    }
    return flag
}console.log(isPrime(700));

function primeSeries(N){
    var primes=[];
    for(var i=1;i<=N;i++){
        if(isPrime(i))primes.push(i)
    }
    return primes
}
var primeNumber=primeSeries(100)
console.log(primeNumber);