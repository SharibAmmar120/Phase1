function count(n) {
    var d = 1;
    console.log(n);
    console.log(d);
    d++;
    if (n > 1) count(n - 1);
    console.log(d);
}
count(3);