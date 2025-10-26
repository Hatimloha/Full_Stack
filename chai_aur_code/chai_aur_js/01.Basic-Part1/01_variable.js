// Type of Varibale: 
let name = 'hatim'; // Value can be change 
var age = 25; // Value can be change
const id = 10; // Value can't be change


// Scope Level: 
let name1 = 'hatim'; // block scope
var age = 25; // Global scope
const accountId = 10; // block scope


// Note: At present we should use the let variable declare type due to scope level otherwise we will face the issue while giving the same variable name accross the programm

// Example:
// Var:
console.log(a) // undefined => hoisted
var a = 10
console.log(a) // 10
var a = 20; // we can use same declare and it will override the previous value
console.log(a) // 20

// let:
let b = 10;
// let b = 20; => if we try to declare the same variable again it will give error but 
b = 20; // we can change the value of variable 
console.log(b); // 20

// const:
const c = 10;
// const c = 20 => Error 
c = 20; //  Assignment to constant variable.
console.log(c) // error

