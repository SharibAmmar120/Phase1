//Armstrong Number  
/*
371=>3**3+7**3+1**3
64=>6**2=4**2=52 not an armstong
153=>1**3+5**3+3**3=153
*/
//153=>find th length/Number of digits=?1,5,3
function armStrongCheck(num){
    var numArr=num.toString().split("")//Converting to String
    var digitCount=numArr.length
    var sum=0;
    for(var i=0;i<digitCount;i++){
        sum=sum+(numArr[i]**digitCount)
    }
    if(sum===num){
        console.log("its an armstrong number");
    }else{
        console.log("its not an armstrong number");
    }
}
armStrongCheck(54,321)


//CODE Use readlineSync to accept imput from CLI for Armstrong Series

function armstongSeries(num){
    var armSeries=[]
    for(var j=2;j<num;j++){
        if(isArmstrong[j])armSeries(j);

    }
    return armSeries
}
console.log(armstongSeries(1000));