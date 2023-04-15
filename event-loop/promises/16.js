import axios from "axios"
console.time("Block 1")
const sum = []

function hitAPI(num1, num2) {
    return axios.get(`https://696c-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
}

async function Main() { //checking it with 7.js
    try {
        for (var i = 0, j = 5; i <= 5, j <= 10; i++, j++) {
            console.log(i, j)
            let res = await hitAPI(i, j)
            console.log(res.data.data);
            sum.push(res.data.data)//pushing in empty array sum
        }
        console.log(sum);
        console.timeEnd("Block 1")
    } catch (error) {
        console.log(error);
    }
}

Main()