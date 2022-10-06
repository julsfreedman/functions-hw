//1.
// function maxOfTwoNumbers(x, y) {
//   if (x >= y) return x;
//   else return y;
// }

// console.log(maxOfTwoNumbers(10, 20));

//terminal printed 20

//2.
const maxOfThree = function (x, y, z) {
  if (x >= y && x >= z) return x;
  if (y >= z) return y;
  else return z;
};

console.log(maxOfThree(2, 4, 6));

//terminal printed 6 for (2, 4, 6) and also worked for all other tested arguments
