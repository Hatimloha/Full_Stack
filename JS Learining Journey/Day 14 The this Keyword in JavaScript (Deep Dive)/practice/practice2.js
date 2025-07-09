// Add an arrow function inside the object and see how this behaves.

// Create an object with a method that logs this.  

const user = {
    name: "rahul",
    age: 25,
    info: () => {
        console.log(`My name is ${this.name} & age is ${this.age}`)
    }
};

user.info()

// Output: My name is undefined & age is undefined