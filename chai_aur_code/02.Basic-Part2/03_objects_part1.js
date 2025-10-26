// Imp: Singleton => 
// // Syntax: Object.create
// const newObj = Object.create({name:'Hatim'})
// console.log(newObj.name)

// Objects literals 
const JsUser = {
    name: 'Hatim',
    'full name': 'Hatim Lohawala',
    age: 18,
    location: 'Jaipur',
    email: 'xyz@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};

// There is two way to print the value:
// 1. using dot 
console.log(JsUser.name) // Hatim

// 2. square brack: As per above data you can't access the full name using dot method
// console.log(JsUser.full name) // error
console.log(JsUser['full name']) // Hatim Lohawala

// How to declare symbol in objects:
const mySym = Symbol('Key1')

const user = {
    [mySym]: 'myKey1' // We have to use key in square bracket to denote it is symbol otherwise js will consider it as string 
};

console.log(user[mySym]) // to print the value of symbol we have to use the sqaure bracket without the ' '.

console.log(user)
/*
myKey1{ 
    [Symbol(Key1)]: 'myKey1' }
{
*/
// Update the user:
JsUser.email = 'abc@gmail.com';
console.log(JsUser) //  Email value will be update

// How to lock the objects so nobody can change the value:
Object.freeze(JsUser); 
JsUser.email = 'changes@gmail.com'
console.log(JsUser); // Value will not changes due to it is freez by the above code 

// Function:
const info = {
    name: 'Hatim',
    age: 25
};

info.greeting = function(){
    console.log('Hello, HRU ?')
}
console.log(info.greeting) // [Function (anonymous)]
console.log(info.greeting())  // Hello, HRU ?

// Now we will access the object value in the functin: 

info.greetingTwo = function(){
    console.log(`My name is ${this.name}`)
}
console.log(info.greetingTwo()) // My name is Hatim



