import axios from "axios";
import readLineSync from "readline-sync"

let API_KEY="8b02424c44857109b0c6f7d2540d22c4";//API KEY From open weather api

async function main(){
  try {
    let cityName=readLineSync.question("Please enter your city name : ")
    let response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`) //api from open weather
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }

}
main()