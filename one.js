//Using spread operator sum of Elements
function sum(x, y, z) {
  return x + y + z;
}

let  numbers = [1, 2, 3];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));
