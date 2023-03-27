//CODE Take a number check if its a prime number or not

function isPrime(num){
    if(factor(num)>2){
        console.log("its a composite number");
    }else console.log("its a prime number");
}
isPrime(1)

function factor(num) {
    var facts = [];
    for (var i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            facts.push(i)
        }
    }
    console.log(facts, facts.length);
}
factor(100)