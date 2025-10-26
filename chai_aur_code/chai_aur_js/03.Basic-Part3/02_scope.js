if(true){
    var a = 10 // Global scope
    let b = 20
    const c = 30
}

// console.log(a) // 10 
// console.log(b) // Error
// console.log(c) // Error

// Example 2: 
if(true){
    var a = 10 // Global scope
    let b = 20
    const c = 30
    console.log("Inner scope: ",b) // Inner scope:  20
}
// console.log(a) // 10 
// console.log(b) // Error
// console.log(c) // Error


// Nested Scope & closer 
function one(){
    const username = 'Hatim';
    function two(){
        const website = 'youtube';
        console.log(username)
    }
    // console.log(website); Error

    two();
}

one(); // Hatim
/*
Above example is very important in term of scope: 
=> when we create a nested function the outer function variable and there value will be global for the inner function.
=> As you can see we have declare const username in function one() but it is accessible by the function two().

Note: Child can take ice-cream from adult but not wise versa
*/


// Example 2: 
if(true){
    const username = "Hatim";
    if(username === "Hatim"){
        const website = ' Youtube';
        console.log(username + website);
    }
    // console.log(website) => error
}
// console.log(username) => Error

// ++++++++++++ Interesting +++++++++++
// function addOne(num){
//     return num + 1
// }

// console.log(addOne(5)) // ReferenceError: addOne is not defined

console.log(addOne(5))
function addOne(num){
    return num + 1
}
Output: 6


console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
