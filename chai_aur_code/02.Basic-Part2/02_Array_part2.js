// Array take any value inside:
// Example: 
const marvel_heros = ['ironman', 'thor', 'spiderman']
const dc_heros = ['flash', 'batman', 'superman']
marvel_heros.push(dc_heros);
console.log(marvel_heros); // [ 'ironman', 'thor', 'spiderman', [ 'flash', 'batman', 'superman' ] ]

/*
As can see the array is taking entire array inside
=> This whole will be 4th element: [ 'flash', 'batman', 'superman' ]
=> To access the data we can use like: console.log(marvel_heros[4][1]) => 'Batman'
*/

// To avoid push problem we can use the concat: 
let newArr = marvel_heros.concat(dc_heros)
console.log(newArr); /* [
  'ironman',
  'thor',
  'spiderman',
  'flash',
  'batman',
  'superman'
]  */


// spread operator: Breaking a glass into small part
let arr = [1,2,3,4,5];
let arr1 = [4,5,6,7,8];
let spread = [...arr, ...arr1];
console.log(spread);

// flat():
//  let newArr = marvel_heros.concat(dc_heros)
console.log(newArr); 
/* 
let output = arr3.flat(value) => value represet how depth it should go to sort the array into single array as per above example it require arr3.flat(4)
let output = arr3.flat(Infinity) // infinity => when we are not sure about the depth 
console.log(output) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// To check it is array or not: 
console.log(Array.isArray('Hatim')) // false

// Convert string into array: 
console.log(Array.from('Hatim')) // [ 'H', 'a', 't', 'i', 'm' ]

// Imp: 
console.log(Array.from({name: 'Hatim'})) // [] empty array

// array from multiple variable: 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) 
// [100,200,300]