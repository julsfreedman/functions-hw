//1.
// function maxOfTwoNumbers(x, y) {
//   if (x >= y) return x;
//   else return y;
// }

// console.log(maxOfTwoNumbers(10, 20));

//terminal printed 20

// //2.
// const maxOfThree = function (x, y, z) {
//   if (x >= y && x >= z) return x;
//   if (y >= z) return y;
//   else return z;
// };

// console.log(maxOfThree(2, 4, 6));

// //terminal printed 6 for (2, 4, 6) and also worked for all other tested arguments

//3.
// function isCharAVowel(x) {
//   if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//     return "true";
//   }
//   else {
//     return "false";
// }
// console.log(isCharAVowel('a'))

function isCharAVowel(char) {
  return (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    false
  );
}
console.log(isCharAVowel("b"));
//  printed false  for argument  "b" and printed true for argument  "a"
// go over this one #3 in office hours (why doesn't my first answer work?)
