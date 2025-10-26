// Example:
const score = 400;  
console.log(score) // 400

const Score = new Number(400);
console.log(Score); //[Number: 400]

// toFixed: use to show only require precision value:
const price = 100.567232; 
console.log(price.toFixed(2)) // 100.57

// toPrecision: it is very imp and use property 
// => In precision we need it to define how much value have to skip before calculation so we need to be very carefull while declaring.
console.log(price.toPrecision(1)) // 1e+2
console.log(price.toPrecision(2)) // 1.0e+2
console.log(price.toPrecision(3)) // 101

// toLocalString(): Use to increase the redeability of integer but it will convert it into an string
const hundred = 100000;
console.log(hundred.toLocaleString()) // 100,000 (By default us style)
console.log(hundred.toLocaleString('en-IN')) // 10,00,000 (Indian Style)

// We can check lots of thing related to number in JS:
// Syntax: Number.
// Example: 
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_VALUE) //1.7976931348623157e+308

// ++++++++++++Math++++++++++
console.log(Math) // Object [Math] {}

// abs(): negative to positive => one way
console.log(Math.abs(-4)) // 4
console.log(Math.abs(4)) // 4

// Whole Value:
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.6)) // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.ceil(4.6)) // 5 

// Min & max
console.log(Math.max(10,3,4,66,4,33)) // 66
console.log(Math.min(10,3,4,66,4,33)) // 3

// sqrt: 
console.log(Math.sqrt(25)) // 5

// random(): the value will be between the 0-1
console.log(Math.random()) // 0.380826390805749
console.log(Math.random() * 10) // 6.498639651048633
console.log((Math.random()*10) + 1) // +1 we use to avoid the condition of getting output as 0 in real world programm.

// Example: Custom
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 17 => random number above 10