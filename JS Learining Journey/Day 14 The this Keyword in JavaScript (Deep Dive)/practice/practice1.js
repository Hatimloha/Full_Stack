// Create an object with a method that logs this.  

const user = {
    name: "rahul",
    age: 25,
    info(){
        return `My name is ${this.name} and age is ${this.age}`
    }
};

console.log(user.info())