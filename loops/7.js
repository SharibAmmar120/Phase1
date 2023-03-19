var str1="";
var str2="";
for(var i=1;i<9;i++){
   str1 +=i;
   str2 +=(10-i);
   console.log(`${str1}*8+${i}=${str2}`);
}