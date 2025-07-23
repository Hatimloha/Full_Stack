// 🧩 4. Log the prototype chain of an array using __proto__ or Object.getPrototypeOf().

const arr = [1, 2, 3];

// Using __proto__
console.log("Using __proto__:");
console.log(arr.__proto__); // Array prototype
console.log(arr.__proto__.__proto__); // Object prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// Using Object.getPrototypeOf()
console.log("\nUsing Object.getPrototypeOf():");
console.log(Object.getPrototypeOf(arr)); // Same as arr.__proto__
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))); // Object.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))); // null
