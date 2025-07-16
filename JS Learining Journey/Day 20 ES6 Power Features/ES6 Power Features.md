# Theory:
> 🔥 "Spread, Rest, and Destructuring" These features help you write cleaner, shorter, and more powerful JavaScript code.

### ✅ 1. Spread Operator (...)
> The spread operator lets you expand elements from arrays or objects.

####  Example (Arrays):
```js
let num = [1,2,3];
let moreNums = [...nums, 4,5];
console.log(moreNums); // [1, 2, 3, 4, 5]
```

####  Example (Objects):
```js
let user = {name: "Hatim", age: 25};
let updatedUser = {...user, city: "Udaipur"};
console.log(updateUser);
// { name: "Hatim", age: 22, city: "Dubai" }
```

### ✅ 2. Rest Parameter (...)
> Used in function arguments to group the rest of the parameters into an array.

#### Example:
```js
function sum(...nums){
    return nums .reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4)); // 10
```

### ✅ 3. Destructuring
> Allows you to extract values from arrays or objects into variables.

#### Array Destructuring:
```js
let fruit = ["Mango", "Banana", "Apple"];
let [a,b,c] = fruits;
console.log(b); // Banana
```

#### Object Destructuring:
```js
let person = {name: "Hatim", age: 22};
let {name, age} = person;
console.log(name); // Hatim
```

