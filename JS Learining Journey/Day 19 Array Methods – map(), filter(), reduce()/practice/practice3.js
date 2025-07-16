// Find the product of all numbers in [2, 3, 4] using .reduce().

let arr = [2,3,4];
let product = arr.reduce((sum, num) => sum * num, 1);
console.log(product)