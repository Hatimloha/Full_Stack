// Question: Can we change the value of Math.pi
console.log(Math.PI)

// Value will not change    
Math.PI = 5
console.log(Math.PI); 

// Why ?
const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter)
/*
Output: Because it is hardcoded in C language with multiple stages
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


const chai = {
    name: 'ginger-chai',
    price: 250,
    isAvailable: true
}
// // console.log(Object.getOwnPropertyDescriptor(chai)) // undefined

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

