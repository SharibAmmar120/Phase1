import fs from "fs"

// CRUD - create , read , update and delete

// fs.readFile("data.txt",(error , data )=>{ //It take two things 1)Name of function 2)call back with parameters error & data 
//     if(error){
//         console.log(error)
//     }else{
//         // console.log(data.toString()) data is stored in 16bits buffer format to convert into string we use .tostring()
//         data = data.toString() //storing
//         data += " HELLO" //Adding another hello
//         console.log(data);
//         fs.writeFile("data.txt", data , (error)=>{  
// // takes three things 1)Name of file  2)data you want to store 3)and error as call back           
//             if(error) console.log(error)
//             console.log("Hello added again")
//         })
//     }
// })


function addUser(user){

fs.readFile("data.json",(error , data )=>{ 
    if(error) throw error
   
        // console.log(data.toString());
        // data = data.toString
        data=JSON.parse(data)//JSON.parse=>converting string to JS object
        const found =data.find((ele)=>ele.email===user.email)
        // ele email from itration of object      user.email is from function 
        if(found) return console.log("Email is already registeterd");
        
        // data.push("Something random")
        data.push(user)
        // console.log(data);
        fs.writeFile("data.json", JSON.stringify(data),(error)=>{ //we can only pass data only if it is string ,JSON.stringfy=>converts object literal to string
            if(error) return console.log(error);
            console.log("user successfully added");
        })
        
      
    
})
}

function deletUser(email){
    fs.readFile("data.json",(error,data)=>{
        if(error) throw error
        data=JSON.parse(data)
        //check for duplicate email
        const remove =data.filter((ele)=>ele.email!==email)
        fs.writeFile("data.json", JSON.stringify(remove),(error)=>{
            if(error) throw error;
            console.log("user deleted successfully");
        })
        
    })

}

function editUser(oldEmail, newEmail){
    fs.readFile("data.json",(error,data)=>{
        if(error) throw error
        data=JSON.parse(data)
        //Edit email
        const index =data.findIndex((ele)=>ele.email===oldEmail)
        if(index === -1)throw "Email not found";
        data[index].email=newEmail
        fs.writeFile("data.json", JSON.stringify(data),(error)=>{
            if(error) throw error;
            console.log("Edit successful");
        })
        
    })

}
editUser("sharibammar120@opera.com","sarwar@gmail.com")

// deletUser("sharibammar120@opera.com")
// addUser({
//     fname:'Sharib',
//     lname:'Ammar',
//     age:'24',
//     address:'Hyderabad',
//     email:'sharibammar120@opera.com'

// })