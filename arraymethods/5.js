//Math.random()
/*
returns from (0-1)
Never returns 1, it will return ....9 but never 1
more than 0,less than 1
0 is base and 1 is edge
*/



console.log(Math.random());
console.log(Math.random()+5);//(5-6)not inclusive of 5 & 6(base changed)
console.log(Math.random()*10);//(0-10)changedthe edge,not including 10
console.log(Math.floor(Math.random()*10));//(0-9) including 9 to ,move edge we use *
console.log(Math.floor(Math.random)*16);//(0-15) including 15
console.log(Math.floor(Math.random()*15)+1);//(1-15) including 15(Generating numbers from 1 to 15)

function rollDice(){
    var dice1=Math.floor(Math.random()*6)+1
    var dice2=Math.floor(Math.random()*6)+1
    if(dice1==dice2 && dice1==6 && dice2==6){
        console.log("Get out of jail free");
    }else{
        console.log("Better luck next time");
    }
}
rollDice()