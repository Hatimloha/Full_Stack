// DataType in JS:

// number
// string
// boolean
// null
// undefined
// symbol
// bigInt
// array 
// object


// How to check the type of variable:

let a = 'hatim'
console.log(typeof(a))

// type of null:
var b = null;
console.log(typeof(b)) // Object

// type of undefine:
let c;
console.log(typeof(c)) // undefine

// we can write type of like: both are correct
console.log(typeof c) 
console.log(typeof(c))


// Type of Datype as per official: 
// 1 - Premitive: Call by value
// 2 - Non Premitive: call by refrence

// Premitive: 7 type
// String
let name = 'Hatim' 
// Number
let score = 100;
let scoreValue = 100.23 
// Boolean
let isLoggedIn = true;
// null
// undefine 
// bigInt 
// Symbol
let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId); // false

// Non-premitive:
// Array
// Object
// Function


// JavaScript is static or dynamic type: Dynamic
// Example: 
let count  = 99;
// Note: I have not define that the value in count will be a interger or string when you put the value in the variable it will change dataType dynamically
