# Theory:
> An object is a collection of key-value pairs.
> It's used to represent a real-world entity with properties and behaviors.

### Basic Syntax:
```js
const person= {
    name: "Hatim",
    age: 25,
    isStudent: true
}
```
- name, age, isStudent are keys (properties).
- "Hatim", 25, true are their values.

### Accessing Object Properties:
```js
console.log(person.name);
console.log(person.age);
```

### Updating & Adding Properties:
```js
person.age = 26;
person.city = "Dubai";
```

### Deleting Properties:
```js
delete person.isStudent;
```

