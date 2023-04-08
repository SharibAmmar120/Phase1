function f(n) {
    if (n <= 1) {
        console.log(n);
    } else {
        f(Math.floor(n / 2));
        console.log(n % 2);
    }
}
f(1024);