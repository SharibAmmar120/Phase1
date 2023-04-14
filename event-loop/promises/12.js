import readLineSync from "readline-sync"
import axios from "axios"
import { Spinner } from "cli-spinner";
import chalk from "chalk"

function main() {
    const username = readLineSync.question(chalk.yellow("Enter your Username : "));
    var spinner = new Spinner('Loading from server.. %s');
    spinner.setSpinnerString('|/-\\');
    spinner.start();

    setTimeout(async () => { //asyn() anonymous function
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`)
            spinner.stop("clean")
            console.log(chalk.greenBright(res.data.followers));
        } catch (error) {
            spinner.stop("clean")
            console.log(err);
        }
    }, 5000)
}

main()
