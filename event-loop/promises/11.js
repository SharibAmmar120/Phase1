import axios from "axios";

// axios.get("https://jsonplaceholder.typicode.com/users") 
//   .then((res)=>{ 
//    const name =res.data.map(ele=>ele.username)//print name 
//     console.log(name);
//   })
//   .catch((err)=>{ 
//     console.log(err);
//   })

  async function hitAPI(){
    try {
        console.log("the start");
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")//await converts a non blocking statement to blocking statement
        const data = res.data.map(ele => ele.username)
        console.log(data);
        console.log("the end")
    } catch (error) {
        console.log(error);
    }
}
hitAPI()