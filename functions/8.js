//CODE Write a function factor ,print all factor and total number of factors

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