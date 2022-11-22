// const strings: string[] = ["a", "b", "c", "d"];
// //access
// strings[0]; //O(1)
// //push
// strings.push("e"); //O(1)
// //pop
// strings.pop(); //O(1)
// //unshift
// strings.unshift("x"); //O(n)
// //splice
// strings.splice(2, 2, "alien"); //O(n)
// console.log(strings);
// //C+=
// // int array[3] {1,2,4} This is an example of static array where we allocate the memory and declare an array
// //JS
// // but in case of JS we have dynamic array
// //reference type
// // [] === []; false
// const obj1 = { value: 10 };
// const obj2 = obj1;
// const obj3 = { value: 10 };
// console.log(obj1 === obj2); // true
// console.log(obj1 === obj3); // false
// //context
// console.log(this);
// const object = {
//   a: () => console.log(this),
// };
// object.a(); // will give the object itself
// //instantiation
// interface IPlayer {
//   name: string;
//   type: string;
// }
// class Player implements IPlayer {
//   name: string;
//   type: string;
//   constructor(name: string, type: string) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(this.name, this.type);
//   }
// }
// // class Wizard extends Player {
// //   name: string;
// //   type: string;
// //   constructor() {
// //     this.name = name;
// //     this.tyo = name;
// //     super(name, type);
// //   }
// // } //HAVE TO RECTIFY
// const player1 = new Player("Niranjan", "Eng");
// player1.introduce();
//Building an array;
// class myArray {
//   length: number;
//   data: Record<number, string>;
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index: number) {
//     return this.data[index];
//   }
//   push(item: string) {
//     this.data[this.length] = item;
//     this.length++;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index: number) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index: number) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }
// const array1 = new myArray();
// array1.push("Apple");
// array1.push("Banana");
// array1.push("Mango");
// array1.push("Cherry");
// array1.push("Watermelon");
// array1.push("Orange");
// console.log(array1);
// console.log(array1.delete(4));
// console.log(array1);
// console.log(array1.pop());
//bad
const reverse = (str) => {
    const strArray = str.split(" ").reverse();
    let reversedArray = [];
    for (let string of strArray) {
        const reversedString = string.split("").reverse().join("");
        reversedArray.push(reversedString);
    }
    return reversedArray.join(" ");
};
//from course
const reverse2 = (str) => {
    const backWards = [];
    for (let i = str.length; i >= 0; i--) {
        backWards.push(str[i]);
    }
    return backWards.join("");
};
const reverse3 = (str) => str.split("").reverse().join("");
console.log(reverse("this is a test")); //tset a si siht
console.log(reverse("hi")); //ih
console.log(reverse2("this is a test")); //tset a si siht
console.log(reverse2("hi")); //ih
console.log(reverse3("this is a test")); //tset a si siht
console.log(reverse3("hi")); //ih
//# sourceMappingURL=array.js.map