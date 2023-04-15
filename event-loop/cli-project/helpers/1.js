import fs, { read } from "fs"

function readFile(fileName){
    return new Promise((resolve, reject) => {
        fs.readFile("data.txt",(err,data)=>{
            if (err) reject(err)
            else resolve(data)
        })
    })
}

// readFile("./helper/1.js")
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// fs.readFile("data.txt",(error,data)=>{
//         if(error) throw error
//         console.log(data);
       
        
//     })
async function main(){
    try {
      const res=await readFile("./helper/1.js")
      console.log(res);  
    } catch (error) {
        console.log(error);
    }
}
main()
