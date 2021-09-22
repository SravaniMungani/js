//spread operator _Array for strings
let fruits=["apple","mango"]
let colors=["red","yellow"]
console.log(new Array(...fruits,...colors));
console.log(Array.of(...fruits,...colors));
console.log(...fruits,...colors);
//spread operator -Array for numbers
let one=[1,2,3]
let two=[4,5,6]
console.log(...one,...two);
console.log(new Array(...one,...two));
console.log(Array.of(...one,...two));








