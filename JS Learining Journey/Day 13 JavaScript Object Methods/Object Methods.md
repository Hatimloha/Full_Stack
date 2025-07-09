# Theory
> An object method is simply a function inside an object. It lets your object do something like an action or behavior.

### Basic Syntax:
```js
const person + {
    name: "Hatim",
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();    // Output: Hello, my name is Hatim
```

- greet is a method (function stored as a property).
- this.name refers to the current object’s name property.

### Shorthand Method Syntax (ES6):
```js
const person = {
    name: "Hatim",
    greet(){
        console.log("Hello, my name is "+ this.name);
    };
};

person.greet();
```

> You can use methods to:
- Greet a user
- Calculate totals
- Update object values
- Perform any action based on the object’s data

```js
// Example with Method Using this:
const student = {
    name: "Hatim",
    marks: [70,80,90],
    getaverage() {
        let sum = 0;
        for(let mark of this.marks){
            sum += mark
        }
        return sum / this.marks.length;
    } 
};

console.log("Average Marks:", student.getaverage())
```