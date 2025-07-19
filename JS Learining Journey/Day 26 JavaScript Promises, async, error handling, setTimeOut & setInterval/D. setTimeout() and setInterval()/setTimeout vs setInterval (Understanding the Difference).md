# Day 26: setTimeout vs setInterval (Understanding the Difference)

## 🟨 1. setTimeout
- Runs only once after a delay
- Good for delayed execution

```js
setTimout(()=> {
    console.log("Runs once after 3 seconds")
}, 3000)
```
> 🧠 Use case: Show a message after a delay, like a popup or splash screen.

## 🟨 2. setInterval
- Keeps running at regular intervals
- Good for repeating tasks like updating UI, clocks, animations

```js
setInterval(()=> {
    console.log("Runs every 2 seconds")
}, 2000);
```
> 🧠 Use case: Live clock, fetching updates from server, image carousel.

## ⚠️ Important: Clear them!
- Use clearTimeout(id) to cancel setTimeout
- Use clearInterval(id) to stop setInterval

