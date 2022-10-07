// //1.
// // function maxOfTwoNumbers(x, y) {
// //   if (x >= y) return x;
// //   else return y;
// // }

// // console.log(maxOfTwoNumbers(10, 20));

// //terminal printed 20

// // //2.
// // const maxOfThree = function (x, y, z) {
// //   if (x >= y && x >= z) return x;
// //   if (y >= z) return y;
// //   else return z;
// // };

// // console.log(maxOfThree(2, 4, 6));

// // //terminal printed 6 for (2, 4, 6) and also worked for all other tested arguments

// //3.
// // function isCharAVowel(x) {
// //   if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
// //     return "true";
// //   }
// //   else {
// //     return "false";
// // }
// // console.log(isCharAVowel('a'))

// function isCharAVowel(char) {
//   return (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u" ||
//     false
//   );
// }
// console.log(isCharAVowel("b"));
// //  printed false  for argument  "b" and printed true for argument  "a"
// // go over this one #3 in office hours (why doesn't my first answer work?)

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function ([x, y, z]) {
  return x + y + z;
};
console.log(sumArray([2, 4, 5]));

//terminal printed 11
//or - alternate answer to #4:

const sumArray2 = function ([x, y, z]) {
  const array = [x, y, z];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumArray2([2, 4, 5]));

// terminal printed 11
