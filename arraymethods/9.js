function randomArray(n1, n2) {
    var arr = new Array(10);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * (n1 - n2 + 1)) + n2;
    }
    return arr;
}

var arr = randomArray(10, 45)
console.log("Before sorting", arr);
// arr.sort((a,b)=>a-b)
arr.sort(()=>0.5-Math.random())//Randomize an array
    //return a-b;Ascending
    //b-a descending

console.log("After sorting", arr);