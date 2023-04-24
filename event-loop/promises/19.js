import axios from "axios"
console.time("Block 3")
const sum = []

function hitAPI(num1, num2) {
    return axios.get(`https://696c-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
}
var calls = []

for (var i = 0, j = 5; i <= 5, j <= 10; i++, j++) {
    calls.push(hitAPI(i, j))
}


async function main() {
    try {
        const response = await Promise.all(calls)
        response.forEach(res => {
            console.log(res.data.data);
            sum.push(res.data.data)
        })
        console.log(sum)
        console.timeEnd("Block 3")
    } catch (error) {
        console.log(error);
    }
}

main()