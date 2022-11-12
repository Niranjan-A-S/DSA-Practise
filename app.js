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
const compressBoxes = (boxes) => {
    boxes.forEach((box) => {
        console.log(box);
    });
};
//O(1) constant time
const compressFirstBox = (boxes) => {
    console.log(boxes[0]);
};
//O(2) still constant time
// const boxes = [1, 2, 3, , 4, 5, 6];
// const compressFirstTwoBoxes = (boxes: Array<number>) => {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// };
// compressFirstTwoBoxes(boxes);
function funChallenge(input) {
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
//# sourceMappingURL=app.js.map