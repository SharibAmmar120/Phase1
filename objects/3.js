var object ={
    sharib:{
        age:24,
        mail:"sharib@mail.com"
    },
    ammar:{
        age:22,
        mail:"ammar@mail.com"
    },
    ansar:{
        age:21,
        mail:"ansar@mail.com"
    },
    "x-auth-token":"sjkdhjkaduk2837",//To access this, square bracket method comes in use
    2:"hello",
    3:"world"

}
console.log(object["x-auth-token"]);
console.log(object["2"]);
console.log(object["ammar"]["age"]);


//Key values can also be represented as numbers 
//Within object we can create new object


//Creating a new key
object["attribute"]="This is an attribute key"
//     New key

console.log(object);


//Edit(Objects are mutable,strings are not)
object.sharib.email="sarwar@mail.com"
console.log(object);


//Delete
delete object['x-auth-token']