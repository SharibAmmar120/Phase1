//Armstrong Number

function armStrongCheck(num){
    var numArr=num.toString().split("")
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