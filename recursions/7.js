function f(n) {
    var i = 1;
    if (n >= 5) return n;
    n = n + i;
    i++;
    return f(n);
}
console.log(f(1))