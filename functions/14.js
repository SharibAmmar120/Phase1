var utils=require("./13.js")
//from 13 to 14 , relative path

//Declarative Approch
function filterArr(arr){
    var primes=arr.filter(ele=>!utils.isPrime(ele))
    console.log(`Total primes :${primes.length}`);
    var arms=arr.filter(ele=>utils.armStrongCheck(ele))
    console.log(`Armstong count: ${arms.length}`);
    // arr=arr.filter(ele=>{
    //     if(utils.isPrime(ele)||utils.armStrongCheck(ele)){
    //         return false
    //     }
    //     return true
    // })
arr=arr.filter(ele=>!utils.isPrime(ele)&&!utils.armStrongCheck(ele))

    console.log(arr);
}
filterArr([10,20,30,40,2,4,7,153,1024,1654,11])
