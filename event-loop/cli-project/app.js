import readLineSync from "readline-sync"
import axios from "axios"
import chalk from "chalk"

async function main(){
    console.clear()//Every single time main function is called it will clear the everything in terminal
    console.log(chalk.green("*************************************************"));
        console.log("\t\t WEATHER CLI \t\t");
        console.log(chalk.green("*************************************************"));
        const options = [
            "Exit The Program", "City co-ordinates", 'Live Temperature in Celsius ( \u2103  )', 'Live Temperature in Fahrenheit ( \u2109  )'
            , 'Live Temperature in Kelvin ( \u212A )', 'Min and Max Temp', 'humidity', 'UTC Time', 'Display Sunrise and Sunset Time in UTC'
        ]
        options.forEach((ele,i)=>console.log(`Enter ${i} to ${ele}`))//to get the menu
        console.log(chalk.green("*************************************************"));
        const option = readLineSync.questionInt("Enter your option from the above menu : ")
        if(option<0 || option>option.length){
            console.log("error");
            let spinner = loading("Invalid Option.Please Try Again. Redirecting to menu ....")
            await setTimeout(5000)
            spinner.stop("clean")
            return Main()

 
        } else {
            switch (option) {
                case 0:
                    console.log("Exiting , Bye")
                    break;
                case 1:
                    await cityCoords()
                    break;
                case 2:
                    await Celsius()
                    break;
                case 3:
                    console.log("This is where Live Temperature in \u2109 will be found and displayed")
                    break;
                case 4:
                    console.log("This is where Live Temperature in \u212A will be found and displayed")
                    break;
                case 7:
                    await getTime()
                    break;
            }
            var willContinue = readLineSync.question("Do you want to Continue? (Y/N) : ");
            if (willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes") {
                let spinner = loading("Redirecting to menu ....")
                await setTimeout(2000)
                spinner.stop()
                return Main()
            } else {
                console.log(chalk.bgGreenBright("Thank you for Using our application , See You Again!"))
            }


        }
    } catch (error) {
        console.log(error);
    }
}

Main()