// ES6 => JS is a prototype language by default there is no classes all are syntatix sugar 


// class User{
//     constructor(username, email, pass){
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     } 
    
//     encryptPassword(){
//         return `${this.pass}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User('hatim', 'xyz@gmail.com', '123')
// console.log(userOne.encryptPassword())
// console.log(userOne.changeUsername())



// // Behind the scene without class: 
// function User(username, email, pass){
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
// }
// User.prototype.encryptPassword = function(){
//     return `${this.pass}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const userOne = new User('hatim', 'xyz@gmail.com', '123')
// console.log(userOne.encryptPassword())
// console.log(userOne.changeUsername())


// Inheritance: 
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, pass){ // here we are override the constructor of parent;
        super(username) // it is replacing the .call(this, username);
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`A new course is added by: ${this.username}`)
    }
}

const chai = new Teacher('hatim', 'xyz@gmail.com', '123');
chai.addCourse()
const masalaChai = new User('Jafar');
// masalaChai.addCourse() // Error
masalaChai.logMe() // Jafar

// Check: 
console.log(chai === masalaChai) // false
console.log(chai === Teacher)   // false
console.log(chai instanceof Teacher) // true

