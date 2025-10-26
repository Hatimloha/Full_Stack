// Basic Math Operations: 
console.log(2+2) // Add
console.log(2-2) // Subraction
console.log(2*2) // multiplication
console.log(2/2) // Divide
console.log(2%2) // Percentage
console.log(2**2) // Power

// Positive to negative value convertion:
let value = 3;
let negValue = -value;
console.log(negValue) // -3

// Operation work in with string:
let str1 = 'Hey'
let str2 = ' Hatim'
console.log(str1 + str2) // Hey Hatim

// Let it make more complex: 
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log('1' + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

// Conversion we should avoid:
console.log(true) // true
console.log(+true) // 1
// console.log(true+) // error
console.log(+'') // 0

// Prefix & Postfix:
let gameCounter = 100;
gameCounter++;
console.log(gameCounter) // postfix: 101
++gameCounter;
console.log(gameCounter) // prefix: 101

// Example to learn prefix & postfix:
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"












