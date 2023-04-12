// console.log('Hi');
// for (var i = 0; i <= 5; i++) {
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
// }
// console.log(i);
// console.log('Bye');

console.log('Hi');
for (let i = 1; i <= 5; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);
    }, i*1000); //for each itration i will be multiplied to 1000 milliseconds 
}
console.log('Bye');