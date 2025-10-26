// array:

const myArr = [0,1,2,3,4,5,6]; // simillar type
const myArr1 = [0,1,2,3,4,5,6, true, 'Hatim']; // multi type

// Declaring of array:
let arr = [1,2,3,4,5];
let arr1 = new Array(1,2,3,4,5); // it will automatically add the sqaure brackets if we will add the bracket the result will be [ [ 1, 2, 3, 4, 5 ] ]

// Array Methods:
arr.push(6) // [ 1, 2, 3, 4, 5, 6 ]
arr.pop() // [ 1, 2, 3, 4, 5 ]
arr.shift() // [ 2, 3, 4, 5 ]
arr.unshift(5) // [ 5, 1, 2, 3, 4, 5 ]
console.log(arr)
console.log(arr.includes(5)) // true
console.log(arr.indexOf(3)) // 2

// .join() => arrat convert into string and join
let newArr = arr.join()
console.log(newArr); 5,2,3,4,5

// Difference Between slice & splice: 
let arr2 = [1,2,3,4,5];
console.log("A:", arr2) // A: [ 1, 2, 3, 4, 5 ]
const myn1 = arr2.slice(1,3) 
console.log(myn1) // [ 2, 3 ]
console.log('B:', arr2) // B: [ 1, 2, 3, 4, 5 ]
const myn2 = arr2.splice(1,3)
console.log(myn2) // [ 2, 3, 4 ]
console.log('C:', arr2) // C: [ 1, 5 ]
console.log(arr2) // [ 1, 5 ] (When we use the splice that particular portion cut from the array)

