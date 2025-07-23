# Day 32 Understanding Prototypes and Inheritance

## ✅ 1. Explanation with Syntax
> JavaScript uses prototype-based inheritance. Every object has an internal link to another object called its prototype.
> When you try to access a property/method that doesn't exist on the object itself, JavaScript will look up the prototype chain.

```js
function Person(name){
    this.name = name;
};

Person.prototype.sayHi = function(){
    console.log(`Hello, my name is ${this.name}`)
};

const user = new Person("Hatim");
user.sayHI();
```

## 🧪 2. Examples
### Example 1: Basic Inheritance
```js
function Animal(name){
    this.name = name;
};

Animal.prototype.speak = function(){
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Buddy");
dog.speak();    // Buddy makes a noise.
```

### Example 2: Prototype Chain Check
```js
console.log(dog.__proto__ === Animal.prototype); // true
```

### Example 3: Inheriting from another constructor
```js
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inherit prototype
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

const tommy = new Dog("Tommy", "Labrador");
tommy.speak(); // Tommy makes a noise.
tommy.bark();  // Tommy barks!
```

### Example 4: Object.create()
```js
const human = {
  greet() {
    console.log("Hi from human!");
  }
};

const developer = Object.create(human);
developer.code = () => console.log("Writing code...");

developer.greet(); // Inherited
developer.code();  // Own method
```