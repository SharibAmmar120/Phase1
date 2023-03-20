function power(x,y){
    var result =1;
    for (var i=1;i<=y;i++){
    result =result*x
    }
    return result

}
console.log(power(2,5));


function power2(x,y){
    var result =1;
    while(y>0){
        result *=x
        y--;
    }
    return result
}
console.log(power2(3,6));
