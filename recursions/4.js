function fun(n) {
    if (n == 0 || n == 1) return n;
    if (n % 3 != 0) return 0;
    return fun(n / 3);
    }
   console.log(fun(11));