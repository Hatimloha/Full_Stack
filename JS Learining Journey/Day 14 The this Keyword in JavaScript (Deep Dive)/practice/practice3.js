// Create two objects with the same method and call it from both — observe how this changes.

function showName(){
    console.log(`My name is ${this.name}`);
}

const user1 = {
    name: "Hatim",
    display: showName
};

const user2 = {
    name: "Jafar",
    display: showName
};

user1.display() // Output: My name is Hatim
user2.display() // Output: My name is Jafar
