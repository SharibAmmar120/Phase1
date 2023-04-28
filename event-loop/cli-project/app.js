import readLineSync from "readline-sync"
import axios from "axios"
import chalk from "chalk"
import { Spinner } from "cli-spinner"
import { cityCoords, Celsius, Fahrenheit, Kelvin, MinMaxTemp, humidity, UTCTime, SunriseSunset } from "./helpers/index.js"
import { setTimeout } from "timers/promises"
import { loading } from "./utils/index.js"

async function main() {
    try {
        console.clear()//Every single time main function is called it will clear the everything in terminal
        console.log(chalk.green("*************************************************"));
        console.log("\t\t WEATHER CLI \t\t");
        console.log(chalk.green("*************************************************"));
        const options = [
            "Exit The Program", "City co-ordinates", 'Live Temperature in Celsius ( \u2103  )', 'Live Temperature in Fahrenheit ( \u2109  )'
            , 'Live Temperature in Kelvin ( \u212A )', 'Min and Max Temp', 'humidity', 'UTC Time', 'Display Sunrise and Sunset Time in UTC'
        ]
        options.forEach((ele, i) => console.log(`Enter ${i} to ${ele}`))//to get the menu
        console.log(chalk.green("*************************************************"));
        const option = readLineSync.questionInt("Enter your option from the above menu : ")
        if (option < 0 || option > option.length) {
            let spinner = loading('Invalid option please try again');
            await setTimeout(5000)
            spinner.stop()
            return main()





        } else {
            switch (option) {
                case 0:
                    console.log("Exiting , Bye")
                    break;
                case 1:
                    await cityCoords() //it will wait for cityCords function for return or break and only then it will go to next line
                    break;
                case 2:
                    await Celsius()
                    break;
                case 3:
                    await Fahrenheit()
                    break;
                case 4:
                    await Kelvin()
                    break;
                case 5:
                    await MinMaxTemp()

                    break;
                case 6:
                    await humidity()

                    break;

                case 7:
                    await UTCTime()
                    break;
                case 8:
                    await SunriseSunset()
                    break;    
            }
            var willContinue = readLineSync.question("Do you want to Continue? (Y/N) : ");
            if (willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes") {
                let spinner = loading("Redirecting to menu ....")
                await setTimeout(2000)
                spinner.stop()
                return main()
            } else {
                console.log(chalk.bgGreenBright("Thank you for Using our application , See You Again!"))
            }


        }

    } catch (error) {
        console.log(error);
    }

}

main()