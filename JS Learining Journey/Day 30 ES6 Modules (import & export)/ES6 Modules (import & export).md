# Day 30 – ES6 Modules (import/export) 💡

## 🔹 What Are ES6 Modules?
> ES6 introduced a native way to split your code into multiple files – modules. This helps keep code organized, reusable, and maintainable.

### 🔸 1. Exporting from a Module
> Let’s say we have a file called mathUtils.js:
```js
// mathUtils.js
export const add = (a,b) => a + b;
export const subtract = (a,b) => a - b;
export const name = "Math Utilities";
```
#### You can also use default export:
```js
// greeting.js
export default function greet(name){
    return "Hello ${name}!"
}
```

### 🔸 2. Importing in Another File
```js
// main.js

import{add, subtract, name} from "./mathUtils.js";
import greet from ".greeting.js"

console.log(add(5, 3));        // 8
console.log(subtract(9, 4));   // 5
console.log(name);             // Math Utilities
console.log(greet("Hatim"));   // Hello, Hatim!
```

> ✅ Note: Use a web server or bundler like Vite/Parcel/Webpack – browsers don’t allow module imports from file:// directly.

###🔹 3. Rules of Modules
- Each module runs in strict mode by default.
- import and export only work at the top level of the file.
- File extensions (.js) are mandatory in imports when using ES Modules in browsers.
- type="module" is required in the HTML script tag.

### 🔸 Example HTML Setup
```html
<!-- index.html -->
<script type="module" src="main.js"></script>
```

