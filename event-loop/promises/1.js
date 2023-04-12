import axios from "axios"


//Promises are non blocking
console.log("Hi");
axios.get("https://jsonplaceholder.typicode.com/users") //API to get data
  .then((res)=>{ //.then is used to resolve a promise
    console.log(res.data);//response.data to get only data other stuff is removed
  })
  .catch((err)=>{ //if the promise is rejected catch is used
    console.log(err);
  })

  console.log("Bye");