// foreach loop: 

// Callback function: this function dont have the name


// // Example: forEach with normal function: 
// const coading = ['js', 'rubby', 'python', "c++"];
// coading.forEach( function(item){
//     console.log(item);
// } )

// // Example: 
// const coading = ['js', 'rubby', 'python', "c++"];
// coading.forEach(item => {
//     console.log(item)
// });

// // Example function refrence: 
// const coading = ['js', 'rubby', 'python', "c++"];
// function printMe(coading){
//     console.log(coading)
// }
// coading.forEach(printMe) // only give function refrence here


// // Example: forEach have more property:
// const coading = ['js', 'rubby', 'python', "c++"];
// coading.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })


// // Example: arr with multiple object: [{}, {}, {}]
// const myCoading = [
//     {
//         languageName: "JavaScript",
//         languageFileName: 'js'
//     },
//     {
//         languageName: "Java",
//         languageFileName: 'Java'
//     },
//     {
//         languageName: "Python",
//         languageFileName: 'py'
//     },
// ]

// myCoading.forEach((item) => {
//     console.log(item)
// })

// myCoading.forEach(item => {
//     console.log(item.languageName)
// })



// // Imp: Store in variable => Output: undefine 
// const coading = ['js', 'rubby', 'python', "c++"];
// const value = coading.forEach( (item) => {
//     console.log(item)
//     return(item)         // try to return output will be undefined
// });
// console.log(value) // undefined

