# 🔢 Day 19: Array Methods – map(), filter(), reduce()

> These are powerful methods used for transforming and working with arrays.

### 1. .map()
- Used to transform each element.
- Returns a new array with modified items.

#### 🔸 Syntax:
```js
let newArray = array.map((item) => {
    return item * 2;
});
```

#### Example: 
```js
let numbers = [2,3,4,6,7];
let newArray = numbers.map(num => num * 2);
console.log(doubled); // [4,6,8,12,14]
```

### ✅ 2. .filter()
- Used to filter items that match a condition.
- Returns a new array of only the matching elements.

### Example:
```js
let numbers = [10, 25, 30, 45];
let above30 = numbers.filter(num => num > 30);
console.log(above30); // [45]
```

### ✅ 3. .reduce()
- Used to accumulate or reduce the array to a single value (like sum).

### Example:
```js
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 15
```