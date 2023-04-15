import axios from "axios"
//Promise.all:resolving all promises
const githubUsers = ["sharibammar120", "TPAteeq", "Abdul535"]
var userData = []
function hitGithub(username) {
    return axios.get(`https://api.github.com/users/${username}`, {
        auth: {
            username: "sharibammar120",
            password: "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" //github token
        }
    })
}

const users = githubUsers.map(ele => hitGithub(ele))//We have array of promises in users its returning promise
// console.log(users)blocking
Promise.all(users)//(we are passing it as an argument to Promise.all)Each promise may take some time to resolve but Promise.all is waiting for all to be completed and then returning a response
.then(response=>{//returning array (proper way to do so that system doesn't break)
    // console.log(response.length); array of responses
    response.forEach(ele=>{
        let obj={}
        obj.name=ele.data.name 
        obj.followers=ele.data.followers 
        obj.following=ele.data.following
        userData.push(obj)
    })
    console.log(userData);
})
.catch(err=>console.log(err) )
// console.log(users);