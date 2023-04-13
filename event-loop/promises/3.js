import axios from "axios";
import fs from "fs";

axios.get("https://jsonplaceholder.typicode.com/todos")
.then((res)=>{ 
    console.log(res.data);
    // let completed=res.data.filter((ele=>ele.completed==true));
    // let pending=res.data.filter((ele=>ele.completed==false));
    // console.log(completed,pending);

    const tasks=res.data.reduce((acc,ele)=>{ //Using reduce method
        if(ele.completed) acc.completed.push(ele)
        else acc.pending.push(ele)
        return acc

    },{
        completed:[],
        pending:[]
    })
    fs.writeFile("pending.json", JSON.stringify(tasks.pending),(error)=>{ 
        if(error) return console.log(error);
        console.log("pending files saved successfully ");
    })
    fs.writeFile("completed.json", JSON.stringify(tasks.completed),(error)=>{ 
        if(error) return console.log(error);
        console.log("completed files saved successfully ");
    })
    
    
    
  })
  .catch((err)=>{ 
    console.log(err);
  })

