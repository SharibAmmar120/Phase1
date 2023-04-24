import axios from "axios"

const githubUsers = ["sharibammar120", "TPAteeq", "Abdul535"]
var userData = []
function hitGithub(username) {
    return axios.get(`https://api.github.com/users/${username}`, {//returns promises
        auth: {
            username: "sharibammar120",
            password: "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" //github token
        }
    })
}
githubUsers.forEach(ele => {
    hitGithub(ele)//hitGithub is returning a promise
        .then(res => {

            let obj = {}//creating an object
            obj.name = res.data.name //Assigning name for each api resolution
            obj.followers = res.data.followers //Assigning followers
            obj.following = res.data.following
            userData.push(obj)

        })
        .catch((err) => {
            console.log(err);
        })
})

// console.log(hitGithub("sharibammar120"));
setTimeout(()=>{
   console.log(userData);
},2000)//(wrong way to to do it) promise is asynchronous and it returns an empty array in this case so we do Promise.all(artificial way)

