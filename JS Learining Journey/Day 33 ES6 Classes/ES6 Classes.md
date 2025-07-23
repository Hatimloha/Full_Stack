# Day 33 – ES6 Classes

## 🚀 What are ES6 Classes?
> Classes in JavaScript are syntactic sugar over prototypal inheritance. They make it easier to create objects and deal with inheritance.

### 🧱 Syntax:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
```

### 🧪 Inheritance:
```js
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    };

    study(){
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
};
```

### 💡 Key Points:
- Concept	        | Description
- constructor()	    | Method to initialize new objects
- extends	        | Inherit from another class
- super()	        | Call the parent class constructor
- this	            | Refers to the instance of the class

### Example 1: Simple Class
```js
class Animal{
    constructor(name){
        this.name = name;
    };

    speak(){
        console.log(`${this.name} makes a noise.`);
    };
};
```

### Example 2: Inheriting Class
```js
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
    };
};

const pet = new Dog("Rocky");
pet.speak();
```

