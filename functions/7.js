//CODE Write a functionthat will prepend zeroeso single digit
var arr = [5, 17, 9, 30, 99, 3]
function prependZeros(arr){
    var newArr=arr.map((ele,i)=>{
        if (ele >=0 && ele<10){
        return `0${ele}`
        }else if(ele<0 && ele>=-9){
            return `-0${ele*-1}`
        } else return ele
       
        
    })
    console.log(newArr);

}
prependZeros(arr)