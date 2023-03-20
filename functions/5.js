//CODE Print 1+2+3+4+5=15

function sum(n){ //n will be 3(3 is parameter)
    var sum=0;
    for(var i=0;i<=n;i++){//condition is the number we have to reach
               //i<=3      when i =1 =>sum =sum+i=>0+1 and i++ will increment to 2 now i is 2
                           //now sum=sum+i=>1+2 and increment to 3 i is 3
                           //Now i is less tha 3 sum=sum+1=>3+3 itgets incremeted to 4 but now the condition is false it will exit the loop
    sum =sum+i;
    
}
return sum
}
console.log(sum(3));


function sum2(n){
    var sum=0;
    var series="";
    for(var i=1;i<=n;i++){
        if(i==n) series +=`${i}`
        else series +=`${i} +`;
        sum +=i;
    }
    console.log(`${series} =${sum}`);
}
sum2(6)



function sum3(n){
    return(n*(n+1)/2)
}
console.log(sum3(5));