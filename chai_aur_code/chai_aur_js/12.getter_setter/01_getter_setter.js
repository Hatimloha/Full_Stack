// class User{
//     constructor(email, pass){
//         this.email = email;
//         this.pass = pass
//     }
//     // Default: getter & setter is available in class but work as default
//     // all variable in the class have getter and setter and become method automatically
//     // We have to use both getter and setter to work

//     get pass(){
//         return this.pass.toUpperCase()
//     }
//     set pass(value){
//         // this.pass = value.toUpperCase(); //RangeError: Maximum call stack size exceeded


//     }

// }
// const info = new User('xyz@gmail.com', '123')
// console.log(info.pass)

// // How to remove the Error: due to call stack is full we need to change the variable name: 
// class User{
//     constructor(email, pass){
//         this.email = email;
//         this.pass = pass
//     }
//     // Default: getter & setter is available in class but work as default
//     // all variable in the class have getter and setter and become method automatically
//     // We have to use both getter and setter to work

//     get pass(){
//         return this._pass.toUpperCase()
//     }
//     set pass(value){
//         this._pass = value.toUpperCase(); //RangeError: Maximum call stack size exceeded


//     }

// }
// const info = new User('xyz@gmail.com', '123')
// console.log(info.pass) // '123'


// Why to use: It use when we want to give the different value while get & set:
class User{
    constructor(email, pass){
        this.email = email;
        this.pass = pass
    }
    // Default: getter & setter is available in class but work as default
    // all variable in the class have getter and setter and become method automatically
    // We have to use both getter and setter to work

    get pass(){
        return `${this._pass}Hatim`
    }
    set pass(value){
        this._pass = value
        // Just suppose for DB we want that it go exact value of pass
    }

}
const info = new User('xyz@gmail.com', '123')
console.log(info.pass)
