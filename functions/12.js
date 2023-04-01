//Imperative Approch
function filterArr(test){
for (var i=0;i<test.length;i++){
    if(test[i]<0){
        test.splice(i,1);
        i-- ////so we control the i with i--

    }
}
console.log(test);
}
filterArr([-2,-4,-3,7,8,12,-2])//if an array has consecutive -ve numbers it will print -ve number wit +ve number even if we put a condition

//Declarative Approch

function filterArr2(test){
    test=test.filter(ele=>ele>0)
    console.log(test);
}
filterArr2([-2,-4,-3,7,8,12,-2])