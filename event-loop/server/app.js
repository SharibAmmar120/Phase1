//Setting up own server
import express from "express";

const app = express();

app.use(express.json());


app.get("/add/:a/:b",(req,res)=>{
    console.log(req.params);
    let { a , b } = req.params
    let sum = Number(a) + Number(b)
    res.status(200).json({"data" : sum})

})

app.listen(5000,()=>{
    console.log("The server is opened on port 5000");
})