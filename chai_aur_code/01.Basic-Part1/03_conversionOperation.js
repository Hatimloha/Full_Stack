let score = "33";
// In realtime application we dont know the coming value is string or number so we have to two ways to check:

// 1: check the type 
console.log(typeof(score)) //string

// 2: convert the value into require datatype (tycasting)
let valueToInr = Number(score)
console.log(typeof(valueToInr)); //number


// If the number is not pure:
let num = "123abc"
let convert = Number(num)
console.log(convert) // NaN

// Suppose variable value is null:
let value = null;
let change = Number(value)
console.log(change) //0

// Suppose variable value is undefine:
let a;
let convertUndefine = Number(a)
console.log(convertUndefine) // NaN


// In case of boolean:
// true will represent - 1
// false will represent - 0


// number to string: 
let age = 88
let numToStr = String(age)
console.log(typeof numToStr) // string 



