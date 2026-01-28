# 🗓️ Day 33 – JavaScript Final Recap + Interview Practice

## ✅ Summary of Core Concepts

| Topic                  | Covered | Use Case                          |
|------------------------|---------|------------------------------------|
| Variables (let, const) | ✅       | Scoped and safe declarations       |
| Functions              | ✅       | Traditional, arrow, callbacks      |
| Arrays & Objects       | ✅       | Structure and collection           |
| Looping & Iteration    | ✅       | for, forEach, map, filter, etc.    |
| DOM Manipulation       | ✅       | UI Interactions                    |
| Event Handling         | ✅       | Clicks, keypress, form actions     |
| Async JS               | ✅       | Promises, async/await, fetch       |
| Modules & Classes      | ✅       | Modern JS structure and OOP        |

---

## 🧠 JavaScript Interview Questions

1. **What’s the difference between `var`, `let`, and `const`?**
2. **What is a closure? Can you give an example?**
3. **How does the event loop work?**
4. **What is the difference between `==` and `===`?**
5. **What are higher-order functions? Name 3.**

---

## 🧪 Final Practice Exercises

### 1. Count Vowels

```js
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("hello")); // 2
```

### 2. Reverse a Number
```js
function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNum(1234)); // 4321
```

### 3. Return Unique Array
```js
function unique(arr) {
    return [...new Set(arr)];
}
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```

### 4. Longest Word in a Sentence
```js
function longestWord(str) {
    return str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestWord("I love programming")); // programming
```

### 5. FizzBuzz from 1 to 100
```js
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}
```