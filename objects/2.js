var sharib = {
    age : 24,
    weight : 77,
    height : 175,
    iq : 0 ,
    hobbies : ["eat","code","sleep","repeat"],
    address : {
        city : "Hyderabad",
        state : "Telangana",
        colony : "laxmannagar",

    }
}

//JSON Format(JavaScript Object Notation)
//In JSON every single thing will be ""
//All the data that is transfered on internet on web application happens through JSON format
//JSON is almost smae as objects
//In JSON all the keys and values are in quotes
//Order does not matter in object


//Two ways to execute object
//1.dot operator
//2.Square brackets

//Type 1
console.log(sharib.height);
console.log(sharib.hobbies[1]);
console.log(sharib.address.city);
console.log(sharib.hobbies[2]);


//Type 2 (We have to use "" in it cause it will consider it as fucntion)
console.log(sharib["iq"]);
console.log(sharib["hobbies"][2]);