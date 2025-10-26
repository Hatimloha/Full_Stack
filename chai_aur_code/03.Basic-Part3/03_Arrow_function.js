// What is this ? 
// => It refers to current context
const user = {
    username: 'Hatim',
    pass: 12345,
    welcomeUser: function(){
        console.log(`${this.username}, welome to website`)
    }
}
user.welcomeUser(); // Hatim, welome to website

// Important: 
console.log(this) // {} empty object
/*
=> When      object
=> When we use console.log(this) in browser it is window object
*/

// This in function: 
// function chai(){
//     let username = 'Hatim';
//     // console.log(this) // It will give so many details
//     console.log(this.username) // undefined
// }
// chai()


// this in arrow function: 
const chai = () => {
    let username = 'Hatim';
    console.log(this); // {} => As you can see insted of giving so many information it is giving any empty object in arrow functiom
}
chai()

// Normal arrow function and implicit arrow function

// Example: Normal arrow function 
// const addNum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNum(3,5)) // 8

// Example: implicit arrow function
const addNum = (num1, num2) => num1 + num2
console.log(addNum(3,5)) // 8

// No return keyword: When we rap it in parantheses we dont require to use return keyword we use this mostly in react 
// const addNum = (num1, num2) => (num1 + num2)

// use of object:
const useObj = () => ({username: 'Hatim'})
console.log(useObj()); // { username: 'Hatim' }

