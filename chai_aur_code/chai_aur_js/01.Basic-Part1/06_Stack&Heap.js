// Q1: Premitive & non-premetive use which type of memory ?
// Stack (Premitive)
// Heap (Non-premitive)

// Example: Working of stack => Work on copy base
let myName = "Hatim";
let changeName = myName;
changeName = 'Jafar'
console.log(changeName) // Change the value in copy of data 
console.log(myName) // Original data


// Example: Working of Heap => Work on refrence base
/*
-> Variable will store in stack
-> Value will be store in heap
-> Variable in stack will be connected to heap memory via address reference.
-> When we call the value it will check the refrence address and give us same store value 
-> When we change in the store value. it will be directly apply on the the store value 
-> Find below example for better understanding
*/

let a = {
    name: 'Hatim',
    age: 25
};
console.log(a)
a.name = 'jafar'
console.log(a)
