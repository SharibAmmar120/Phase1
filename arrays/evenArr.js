//CODE Array which has even elements

function even(n){
    var arr2=[];
    for(var i=1;i<=n;i++){
       
        if(i%2==0){
            arr2.push(i)
        }
        
    }
    return arr2
}
console.log(even(10));



function even2(n){
    var arr3=[];
    for(let i=1;i<=n;i=i+2){
        arr3.push(i)
    }
    return arr3
}
console.log(even2(20));