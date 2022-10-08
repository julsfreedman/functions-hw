// // //1.
// // // function maxOfTwoNumbers(x, y) {
// // //   if (x >= y) return x;
// // //   else return y;
// // // }

// // // console.log(maxOfTwoNumbers(10, 20));

// // //terminal printed 20

// // // //2.
// // // const maxOfThree = function (x, y, z) {
// // //   if (x >= y && x >= z) return x;
// // //   if (y >= z) return y;
// // //   else return z;
// // // };

// // // console.log(maxOfThree(2, 4, 6));

// // // //terminal printed 6 for (2, 4, 6) and also worked for all other tested arguments

// // //3.
// // // function isCharAVowel(x) {
// // //   if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
// // //     return "true";
// // //   }
// // //   else {
// // //     return "false";
// // // }
// // // console.log(isCharAVowel('a'))

// // function isCharAVowel(char) {
// //   return (
// //     char === "a" ||
// //     char === "e" ||
// //     char === "i" ||
// //     char === "o" ||
// //     char === "u" ||
// //     false
// //   );
// // }
// // console.log(isCharAVowel("b"));
// // //  printed false  for argument  "b" and printed true for argument  "a"
// // // go over this one #3 in office hours (why doesn't my first answer work?)

// //4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// // const sumArray = function ([x, y, z]) {
// //   return x + y + z;
// // };
// // console.log(sumArray([2, 4, 5]));

// // //terminal printed 11
// // //or - alternate answer to #4:

// // const sumArray2 = function ([x, y, z]) {
// //   const array = [x, y, z];
// //   let sum = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     sum += array[i];
// //   }
// //   return sum;
// // };
// // console.log(sumArray2([2, 4, 5]));

// // terminal printed 11

// //5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// function multipleArray([x, y, z]) {
//   return x * y * z;
// }
// console.log(multipleArray([2, 4, 5]));

// //6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// const numArgs = function ([x, y], w) {
//   return numArgs.length;
// };
// console.log(numArgs([2, 4], 3));

// terminal prints 2
// alternate arguments to #6:

// const numberArgs = function (w, x, y, z) {
//   return numberArgs.length;
// };
// console.log(numberArgs(2, 4, 6, 7));

//terminal prints 2 then 4

// #7 Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseString(aString) {
//   let reverseString = "";
//   for (let i = aString.length - 1; i >= 0; i--) {
//     reverseString += aString[i];
//   }

//   return reverseString;
// }

// console.log(reverseString("rockstar"));

// terminal printed ratskcor

// #8 Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// const longestStringInArray = function (array) {
//   let longest = 0;
//   for (let x = 0; x < array.length; x++) {
//     if (array[x].length > longest) {
//       longest = array[x].length;
//     }
//   }
//   return longest;
// };

// console.log(longestStringInArray(["Aloha", "shoots", "pau"]));
// Terminal printed 6 which is correct b/c the longest string is "shoots" which has a lenght of six

// #9 Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(array, num) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
//Terminal printed ['hell', 'morning']
