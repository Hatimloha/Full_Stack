// // Why we need call: 
// function setUsername(username){
//     // complex DB execution
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUsername(username)
//     this.email = email
//     this.password = password
// }

// const info = new createUser('hatim', 'xyz@gmail.com', '123')
// console.log(info) // createUser { email: 'xyz@gmail.com', password: '123' }
// Note: if we will do the console.log() in the setUsername function it will call but not print the value because after running it removed by the stack so we have to hold the refrence for future use 


// // Example 1: Call will fix the issue: 
// function setUsername(username){
//     // complex DB execution
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUsername.call(this, username)
//     // .call is use to hold the function refrence 
//     // this, => this is use to show the current context for the next function mean setUsername transfer the value to this and give to createUser
//     this.email = email
//     this.password = password
// }

// const info = new createUser('hatim', 'xyz@gmail.com', '123')
// console.log(info)