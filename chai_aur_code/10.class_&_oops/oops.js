// Note: This is an object and object literal. smallest unit of JS
// const user = {
//     username: 'hatim',
//     loginCount: 8,
//     signedIn: true,
// }
// console.log(user)

// this: current context
// const user = {
//     username: 'hatim',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(this.username)
//     }

// }
// user.getUserDetails()


// this in node: 
// console.log(this) // {}

// this in browser: it content lots of information related to api, object method, info
// console.log(this) // it will refer to window object

// Only print this: 
// const user = {
//     username: 'hatim',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(this)
//     }
// }
// user.getUserDetails() // It will print all the current context data 


// Constructor => it is user to make new context for simillar task:
/*
Examples: 
const date = new Date;
const promiseOne = new Promise()
*/ 

// // Example 2:
// function user(username, loginCount, isLoggendIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggendIn = isLoggendIn;

//     return this // Now we can access the above value in function using the this
// }
// const userOne = user('hitesh', 12, true);
// console.log(userOne) 


// // Example 3: Why we need to use new context & instance: 
// function user(username, loginCount, isLoggendIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggendIn = isLoggendIn;

//     return this // Now we can access the above value in function using the this
//     // Note: return of this is already predefine it doesn't matter we write it or not it will return
// }
// const userOne = user('hitesh', 12, true);
// const userTwo = user('Chai aur Code', 11, false);
// console.log(userOne) // Here we are printing the userOne but still it will give us the userTwo data (overWrite);


// // with new constructor: 
// const userOne = new user('hitesh', 12, true);
// const userTwo = new user('Chai aur Code', 11, false);
// console.log(userOne) 


// // Example: what will come when we will print constructor: 
// function user(username){
//     this.username = username;
//     this.greeting = function(){
//         console.log(`Hi ${this.username}`)
//     }

//     return this
// }

// const userOne = new user('hatim');
// console.log(userOne.constructor); // [Function: user]
// // Note: it will give the refrence of itself mean for this function it is user


// // Method: Instance => This is use to check we have same instence or not: 
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car("Honda", "Accord", 1998);

// console.log(auto instanceof Car);
// // Expected output: true

// console.log(auto instanceof Object);
// // Expected output: true
