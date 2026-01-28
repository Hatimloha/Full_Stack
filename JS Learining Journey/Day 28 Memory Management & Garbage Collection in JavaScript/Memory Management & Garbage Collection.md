# 🧠 Day 27 – Memory Management & Garbage Collection in JavaScript
> Today’s topic introduces how JavaScript manages memory, what garbage collection is, and how you can avoid memory leaks. Understanding this helps you write optimized and long-lasting code—especially important for apps, timers, intervals, DOM-heavy pages, etc.

## 🔍 What is Memory Management?
> When your code runs, it needs memory to store:
- Variables
- Functions
- DOM elements
- Event listeners
- Timers
- API responses
- Objects, arrays, etc.
> JavaScript automatically allocates and deallocates memory using garbage collection (GC).

## 🧹 What is Garbage Collection?
> Garbage collection is the process of automatically removing unused memory.
> JS uses a method called Mark-and-Sweep Algorithm:
- It “marks” memory that is still in use (reachable).
- It “sweeps” (deletes) memory that is no longer reachable.

## ✅ Reachability
> JS tracks what is "reachable":
- Anything referenced from the root (window, global, etc.)
- Anything in scope (e.g. a local variable)
- DOM elements referenced by your JS
> If nothing references it anymore → it becomes unreachable, so it gets garbage collected.

### 🧪 Example 1: Auto Garbage Collected
```js
function createUser() {
    let user = {
        name: "Alice"
    };
    return user;
}

let person = createUser(); // user object now stored in `person`

person = null; // object is no longer referenced
// → JavaScript will eventually clean up memory
```

### ⚠️ Example 2: Memory Leak
```js
let elements = [];

function createLeak(){
    let div = document.createElement("div");
    document.body.appendChild(div);
    elements.push(div);
};
```
> Even if the DOM element is removed, the reference inside elements[] keeps it in memory.

## 🧠 How to Avoid Memory Leaks
- 🔍 Problem                            |💡 Solution
- Unused variables	                     | null them or let them go out of scope
- Timers/Intervals not cleared	         | Use clearInterval, clearTimeout
- DOM elements referenced after deletion | Remove references
- Global variables	                     | Use let/const, not var globally

### 🔄 Clear Timers to Avoid Leaks
```js
let timer = setInterval(() => {
    console.log("Running.....");
}, 1000);

// Later stop it
clearInterval(timer);
```

## ✅ Best Practices
- Always clear event listeners when elements are removed
- Don’t keep long-lived references to DOM
- Use dev tools to monitor memory (Performance tab in Chrome)
- Close unused intervals, listeners, etc.
