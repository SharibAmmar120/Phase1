// function takelongestWord(str){
//     var word1=str.split(' ');
//     var word2=0;
//     var longestWord='';
//     for (let i=0;i<word1.length;i++){
//         if(word1[i].length>word2){
//             word2=word1[i].length;
//             longestWord=word1[i];
//         }
//     }
//     // console.log(word2);
//     console.log(longestWord);
// // }
// takelongestWord("Green hairy fox jumps over the wooden block")

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");


function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");