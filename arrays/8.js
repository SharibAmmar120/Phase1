var arr=[-1,1-5,-6,2,4,7,-19,9]

// var postiveNum=arr.map((ele)=>{
//     if(isPositive(ele)) return ele;
//     else return
// })

//FILTER (Array  helper method)
var postiveNum=arr.filter(isPositive)
console.log(postiveNum);
function isPositive(n){
    if(n>0){
        return true;
    }
    return false
}