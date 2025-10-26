// for of loop: Array Specific loops not work with object

// // Example 1: loop on array 
// const arr = [1,2,3,4,5];
// for (const item of arr) {
//     console.log(item)
// }


// // Example 2: for of loop on strings: 
// let greeting = 'Hello world!';
// for (const str of greeting) {
//     if(str !== ' '){
//         console.log(str)
//     }
// }


// // Maps: contain unique value and remember the order of data insertion:
// // Imp key should be unique
// const map = new Map() // map is an object in JS
// map.set('IN', 'INDIA')
// map.set('USA', 'UNITED STATES OF AMERICA')
// map.set('FR', 'FRANCE')
// map.set('IN', 'INDIA')
// console.log(map);


// // Example: key & value seprate with above eg: 
// for (const [key, value] of map) {
//     console.log(`${key}:${value}`)
// }

// // Example: for of on object: 
// const myObj = {
//     game1: "GTA",
//     game2: 'NFS',
//     game3: 'Marvel'
// }

// for (const [key, value] of myObj) {
//     console.log(`${key}:${value}`)
// } // TypeError: myObj is not iterable

