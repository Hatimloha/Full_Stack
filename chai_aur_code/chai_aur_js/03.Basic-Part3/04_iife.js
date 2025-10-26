// Immediatly Invoked Function Expression (IIFE): 

// Why we need to use IIFE ? 
// => To avoid situation like global scope polution in application we need to use the IIFE in the application.
// => Best Example is DB connection


// Syntax: 
(function chai(){
    // This is a Name IIFE (interview)
    console.log('DB connected')
})();
// First () => This is use to write the function defination
// Second () => This is use to call the function


/*
Important: Use of semi-column in the IIFE function
If we dont use the semi-column after finishing the IIFE code it will give error to another IIFE code.
Because after invoking it doesn't know where to stop this semi-column use to stop it.
*/ 

// Arrow function Syntax: 
( () => {
    // This is a simple IIFE (interview)
    console.log('DB two connected')
})(); // 


// How to pass the value;
( (name) => {
    console.log(`My name is ${name}`)
})('Hatim') // My name is Hatim

