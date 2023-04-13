import readLineSync from "readline-sync"
import axios  from "axios"
import { Spinner } from "cli-spinner";
import chalk from "chalk";

function main(){
const username=readLineSync.question("Enter your Username : ");
console.log(username);
var spinner=new Spinner('processing..%s');//used it from npmjs
spinner.setSpinnerString('|/-\\');//Can use emojis
spinner.start()
setTimeout(()=>{
    axios.get(`https://api.github.com/users/${username}`)
.then((res)=>{
    spinner.stop("clean")
    console.log(chalk.bgGreenBright(res.data.public_repos,"public_repos"));//with only response(res) we will get all meta data to avoid it we use res.data
   
})
.catch((err)=>{
    spinner.stop("clean")//if there's an error and spinner is still loading we use spinner.stop
    console.log(err);
})
},5000)
}
main()