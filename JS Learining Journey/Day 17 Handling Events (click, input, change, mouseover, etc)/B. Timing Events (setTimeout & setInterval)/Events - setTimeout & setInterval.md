# Theory: Day 19 – Timing Events (setTimeout & setInterval)

> JavaScript provides two key functions for handling time-based actions:

### ⏳ 1. setTimeout() – Runs code once after a delay:
- Syntax:
```js
setTimeout(function, delayInMilliseconds);
```

- 🔹 Runs the function once after the given delay.
```js
setTimeout(() => {
    console.log("This run after 3 second")
}, 3000);
```

### 🔁 2. setInterval() – Runs code repeatedly at fixed time intervals

- Syntax:
```js
setInterval(function, delayInMilliseconds);
```

🔹 Repeats the function every given delay.
```js
setInterval(()=>{
    console.log("This prints every 2 seconds");
}, 2000);
```

### ❌ How to Stop Them?
```js
clearTimeout(timeoutId)
clearInterval(intervalId)
```

