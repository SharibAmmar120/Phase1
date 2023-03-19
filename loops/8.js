
for(var i=5;i>=1;i--){
    let row="";//Empty row
    for(var j=1;j<=i;j++){
        row +="*"//Adding star to row
    }
    console.log(row);
}

//Other way
var str="*****";
for(var i=5;i>0;i--){
    console.log(str);
    str=str.substring(0,i-1)//Substring will go from 0 to i postion
}

