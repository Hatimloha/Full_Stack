// Practice Exercise 7: Private Fields & Methods
// Define a class User that has a private field #password, and a method to validate it.

class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    validate(input) {
        if (input === this.#password) {
            console.log("✅ Password is correct!");
        } else {
            console.log("❌ Invalid password.");
        }
    }
}

const user = new User("Hatim", "12345");

user.validate("12345"); // ✅ Password is correct!
user.validate("wrong"); // ❌ Invalid password

// console.log(user.#password); ❌ This will throw an error


