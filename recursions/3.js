function fun(x, y) {
    if (y == 0) return 0;
    return x + fun(x, y - 1);
    }
    function fun2(a, b) {
    if (b == 0) return 1;
    return fun(a, fun2(a, b - 1));
    }
    
console.log(fun2(5, 2));//x+x*y