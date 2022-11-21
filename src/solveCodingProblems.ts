// Given two arrays,create a function that lets a user know(true/ false) whether these two arrays contain any two common DataTransferItemList

// For eg:
// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["s", "x", "f", "e"];

// // return false

// const arr3 = ["a", "b", "c", "d"];
// const arr4 = ["s", "x", "f", "d"];

// return true

//inputs: two arrays of strings
//output: boolean

//ask questions

//brute force

// const checkForSame = (arr1: string[], arr2: string[]) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] === arr1[i]) return true;
//     }
//   }
//   return false;
//   arr1.forEach((a) => {
//     arr2.forEach((b) => {
//       if (a === b) return true;
//     });
//   });
//   return false;
// };
//O(a * b) Time  Complexity
//O(1) Space  Complexity

// better approach
// const checkForSame = (a: string[], b: string[]) => {
//   //loop through first array and create an object from first array where properties equals to items in array
//   const map = {};
//   for (let item of a) {
//     if (!map[item]) {
//       map[item] = true;
//     }
//   }

//   //loop through second array and check if the properties of the created object exist in second array
//   for (let item of b) {
//     if (map[item]) return true;
//   }
//   return false;
// };
//Time complexity is O( a + b)
//Space complexity is O( a )

//another approach
// const checkForSame = (a, b) => {
//   return a.some((item) => b.includes(item));
// };

//GOOGLE INTERVIEW QUESTION
// Write a function with two input an array of integers and a sum value and return whether there exist pairs of numbers in the array that add upto the sum

//Brute force
// const hasPairWithSum = (arr: number[], sum: number) => {
//   for (let a of arr) {
//     for (let b of arr) {
//       if (a + b === sum) return true;
//     }
//   }
//   return false;
// };

//Better approach
const hasPairWithSum = (arr: number[], sum: number) => {
  let mySet = new Set();
  for (let item of arr) {
  }
};

console.log(hasPairWithSum([1, 23, 5, 3], 8));
console.log(hasPairWithSum([1, 23, 5, 6], 8));
console.log(hasPairWithSum([1, 23, 4, 4], 8));
