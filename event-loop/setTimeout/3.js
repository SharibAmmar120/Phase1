setTimeout(function () {
    console.log("I am First");
}, 1000);
setTimeout(function () {
    console.log("I am First");
}, 1500);
setTimeout(function () {
    console.log("I am Third");
}, 3500);
setTimeout(function () { //Consider this 2sec setTimeout a whole
    console.log("I am Just Getting Started with Adv. JS");
    setTimeout(function () {
        console.log("I am Just Getting Started again");
    }, 5000);// Nested seTimeout time gets added so it will be 7 sec
}, 2000);

//If we do in asynchronous manner all the setTimeout will be loaded first