var readlineSync=require('readline-sync')// Importing readlineSync from package

var mails=readlineSync.questionInt('Enter thr number of mails you have : ');

console.log(mails);
if(mails>0){ //(Assigned mails will check the condition mails that is it greater than 0 or not. If it is greater than 0 it will give the console.log output)
    console.log("Your Inbox has mails");
}else if(mails<0){ //(If mails are less than 0 below will get printed)
    console.log("Your input is wrong mails cannot be negative ");
}else{ //(If mails are not greater than 0 it give the below output)
    console.log("Your Inbox is empty");
}



