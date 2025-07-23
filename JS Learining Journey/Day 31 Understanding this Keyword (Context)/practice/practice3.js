// Use an arrow function inside an object and try to access a property via this.

const person = {
    name: "Rahul",
    details: () => {
        console.log(this.name)
    }
}

person.details(); // undefine