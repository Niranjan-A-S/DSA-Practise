//big o notation
// const nemo: Array<string> = new Array(10000).fill(Math.random());

// const findNemo = (array) => {
//   const t0 = performance.now();

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("!FOUND NEMO");
//     }
//     console.log("not found!");
//   }
//   const t1 = performance.now();
//   console.log(t1 - t0);
// };

// findNemo(nemo);

//O(n) linear

// eg:
const compressBoxes = (boxes: Array<string>) => {
  boxes.forEach((box) => {
    console.log(box);
  });
};

//O(1) constant time
const compressFirstBox = (boxes: Array<string>) => {
  console.log(boxes[0]);
};

//O(2) still constant time
// const boxes = [1, 2, 3, , 4, 5, 6];
// const compressFirstTwoBoxes = (boxes: Array<number>) => {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// };

// compressFirstTwoBoxes(boxes);

function funChallenge(input: Array<number>) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    // anotherFunction();//O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

// 3 + 3n; this is same as  0(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)

  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }

  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// O(4 + 5n )

//Rule Book
// Worst Case
// Remove Constants
// Different terms for inputs
// Drop Non Dominants

//Worst Case
// always think about the worst case like when looping through the array to find nemo
// except it to be at the last position too

//Drop the constants
// const printFirstItemThenFirstHalfThenSayHiTenTimes = (array: Array<number>) => {
//   console.log(array[0]);

//   const middleIndex = Math.floor(array.length / 2);
//   let index = 0;

//   while (index < middleIndex) {
//     console.log(array[index]);
//     index++;
//   }

//   for (let index = 0; index < 10; index++) {
//     console.log("Hi");
//   }
// };

// printFirstItemThenFirstHalfThenSayHiTenTimes([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// //BIG 0  = O(1) + 0(n/2) + O(100)  = o(n)

// //another example of drop the constants
// const compressBoxesTwice = (boxes) => {
//   boxes.forEach((box) => console.log(box));
//   boxes.forEach((box) => console.log(box));
// };

// // O(2n)  = O(n)

//O(n^2) quadratic time
// const logPairs = (arr: number[]) => {
//   arr.forEach((num1) => arr.forEach((num2) => console.log(num1, num2)));
// };

// logPairs([1, 2, 3, 4, 5]);
// //O(n^2)

// //different terms have different inputs
// const compressBoxesTwice = (boxes1, boxes2) => {
//   boxes1.forEach((box) => console.log(box));
//   boxes2.forEach((box) => console.log(box));
// };
//now the big O  is O( a + b) where the inputs are different
// if the loops were nested the big O would be O(a * b)

// const printAllNumbersThenAllPairSums = (arr: number[]) => {
//   arr.forEach((num) => console.log(num));

//   console.log("and their sums are : ");

//   arr.forEach((a) => arr.forEach((b) => console.log(a + b)));
// };

// printAllNumbersThenAllPairSums([1, 2]);
//BIG O  =  O(n) + O(n^2)
//here we apply the rule number 4  and take only the non dominant terms

//SPACE COMPLEXITY
const logBooo = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log("booo");
  }
};
//the space complexity is O(1) since there is only one memory allocation ie the i variable

// const arrayOfHiNTimes = (n: number) => {
//   const hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// };
//the space complexity is O(n) since there is  memory allocation for a data structure
