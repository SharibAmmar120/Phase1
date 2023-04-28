import { readFile } from "fs/promises"
import axios from "axios"
import readLineSync from "readline-sync"
import { loading } from "../utils/index.js"
import { Spinner } from "cli-spinner"




async function cityCoords() {
    try {
        let data = await readFile("cities.json")
        data = JSON.parse(data)

        // fs.readFile("cities.json",(error,data)=>{
        //     if(error) throw error
        //     data=JSON.parse(data)
        let city = readLineSync.question("Enter the City Name : ")
        let result = data.find((ele) => {
            let cityName = ele.name
            cityName = cityName.toLowerCase()
            city = city.toLowerCase()
            return (city == cityName)
        })


        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
async function Celsius() {
    try {
        let city = readLineSync.question("Enter the City Name : ")
        let spinner = loading("Searching...")
        let res = await hitAPI(city)
        let temp = res.data.main.temp - 273.15;
        temp = temp.toFixed(2)
        spinner.stop("clean")
        console.log(temp, "\u2103 ");
    } catch (error) {
        console.log(error);
    }
}
async function Fahrenheit() {
    try {
        let city = readLineSync.question("Enter the City Name : ")
        let spinner = loading("Searching...")
        let res = await hitAPI(city)
        spinner.stop("clean")
        let temp = (res.data.main.temp - 273.15) * (9 / 5) + 32
        temp = temp.toFixed(2)
        console.log(temp, "\u2109  ");

    } catch (error) {
        console.log(error);
    }
}
async function Kelvin() {
    try {
        let city = readLineSync.question("Enter the City Name : ")
        let spinner = loading("Searching...")
        let res = await hitAPI(city)
        spinner.stop("clean")
        let temp = res.data.main.temp;
        console.log(temp, "\u212A ");

    } catch (error) {
        console.log(error);
    }
}
async function MinMaxTemp() {
    let city = readLineSync.question("Enter the City Name : ")
    let spinner = loading("Searching...")
    let res = await hitAPI(city)
    let temp1 = res.data.main.temp_min;
    let temp2 = res.data.main.temp_max
    spinner.stop("clean")
    console.log(temp1, temp2);

}
async function humidity() {
    let city = readLineSync.question("Enter the City Name : ")
    let spinner = loading("Searching...")
    let res = await hitAPI(city)

    let temp = res.data.main.humidity;
    spinner.stop("clean")
    console.log(temp);

}
async function UTCTime() {
    try {
        let city = readLineSync.question("Enter the City Name : ")
        let spinner = loading("Searching...")
        let res = await hitAPI(city)

        let date = res.data.dt;
        let currentDate = new Date(date*1000)
        spinner.stop("clean")
        console.log(currentDate);

    } catch (error) {
        console.log(error);
    }   

}

async function SunriseSunset() {
    try {
        let city = readLineSync.question("Enter the City Name : ")
        let spinner = loading("Searching...")
        let res = await hitAPI(city)
        let rise = res.data.sys.sunrise;
        let set = res.data.sys.sunset;
        let currentDate1 = new Date(rise*1000)
        let currentDate2 = new Date(set*1000)
        spinner.stop("clean")
        console.log(currentDate1,currentDate2);

    } catch (error) {
        console.log(error);
    }
}
function hitAPI(cityName) {
    let API_KEY = "8b02424c44857109b0c6f7d2540d22c4";
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
}


export { cityCoords, Celsius, Fahrenheit, Kelvin, MinMaxTemp, humidity, UTCTime ,SunriseSunset}