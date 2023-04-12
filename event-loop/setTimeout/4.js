console.log('Hello ');
setTimeout((id) => { //id here is 14 
    const user = {
        name: 'John Doe',
        age: 25
    };
    console.log(`User ID : ${id} : User name : ${user.name}, UserAge: ${user.age}`);
}, 5000, 14);
setTimeout(() => {
    console.log("I am First");
}, 1000);
setTimeout(() => {
    console.log("I am Second");
}, 1500);