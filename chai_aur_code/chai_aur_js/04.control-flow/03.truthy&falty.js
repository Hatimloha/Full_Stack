// const userEmail  = 'xyz@gmail.com' // It will be assumed as true
// if(userEmail){
//     console.log('got user email')
// }else{
//     console.log('User dont have email')
// }

// // got user email

// // Example black String: 
// const userEmail  = '' // it will be assumed as false
// if(userEmail){
//     console.log('got user email')
// }else{
//     console.log('User dont have email')
// }
// // User dont have email


// // Falsy Value
// false, 0, -0,0n (BigInt), null, undefined, NaN

// // Truthly:
// "0", "false", " ", [], {}, true, function(){}


// // How to check empty object & array:
// if(arr.length === 0) console.log(array is empty)
// if(Object.keys(emptyObj).length === 0) console.log(object is empty)


// // important: 
// false === 0;
// false === '';
// 0 === ''
// // true


// // Nullish Coalescing Operator: ??
// // This was made for safety check so programm work properly in case of null & undefined value
// let val1;
// val1 = 5 ?? 10
// console.log(val1) // 5

// let val1;
// val1 = null ?? 10
// console.log(val1) // 10

// let val1;
// val1 = undefined ?? 10
// console.log(val1) // 10


// // Multiple Value
// let val1;
// val1 = undefined ?? 5 ?? 20 
// console.log(val1) // 5


// // Terniary Operator:
// condition ? true : false
// const iceTeaPrice = 79;
// iceTeaPrice <= 80 ? console.log('Less than 80') : console.log('More then 80')

