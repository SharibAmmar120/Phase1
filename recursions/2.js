// for(var i=1;i<=10;i++){
// console.log(`2*${i}=${i*2}`);
// }

//FILO (First in last out)
function table(x,y){
    if(y==0) return
    console.log(`${x}*${y}=${x*y}`);
    table(x,y-1)
}
table(2,10)


//LIFO (Last in first out)

function table(x,y){
    if(y==0) return
    table(x,y-1)
    console.log(`${x}*${y}=${x*y}`);
    
}
table(3,10)

