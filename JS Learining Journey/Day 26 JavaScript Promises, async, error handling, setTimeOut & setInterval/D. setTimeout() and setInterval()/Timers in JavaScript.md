# Day 26: Timers in JavaScript — focusing on setTimeout() and setInterval().

## 🔸 Timers in JavaScript
> Timers allow you to execute code after a delay (setTimeout) or repeatedly at intervals (setInterval).

### ✅ setTimeout(): Runs code once after a delay
```js
setTimeOut(() =>{
    console.log("This runs after 2 seconds");
}, 2000)    // 2000ms = 2 seconds
```

### ✅ setInterval(): Runs code repeatedly at a fixed interval
```js
setInterval(()=>{
    console.log("Repeats every 3 seconds");
}, 3000);
```

## 🛑 Stopping the timer
> You can stop a timer using clearTimeout() or clearInterval().

```js
let timeId = setInterval(() => {
    console.log("Repeating......");
}, 1000)

setTimeOut(() => {
    clearInterval(timeId);
    console.log("Stopped the interval");
}, 5000);
```
