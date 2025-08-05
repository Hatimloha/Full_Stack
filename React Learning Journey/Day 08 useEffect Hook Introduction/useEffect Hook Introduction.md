# ✅ React Day 8: useEffect Hook Introduction

## 📌 What is useEffect?
> useEffect is a React Hook that lets you perform side effects in function components.

### Examples of side effects:
- Fetching data
- Setting up subscriptions or timers
- Updating the DOM
- Syncing state with localStorage, etc.

🧠 Syntax
```js
useEffect(() => {
  // side effect code here

  return () => {
    // optional cleanup (like clearing intervals or unsubscribing)
  }
}, [dependencies])
```

#### 🧪 Examples
1. Run on every render
```js
useEffect(() => {
  console.log("Component rendered!");
});
```

2. Run only once (on mount)
```js
useEffect(() => {
  console.log("Component mounted!");
}, []);
```

3. Run when a specific state/prop changes
```js
useEffect(() => {
  console.log("Count changed!");
}, [count]);
```

4. Cleanup on unmount (timer example)
```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
  };
}, []);
```

### 💻 Mini Task: Counter with useEffect
1. Create a counter that:
2. Increases every second using setInterval
3. Shows “Stopped” when unmounted (cleanup)

#### 🧠 5 Practice Tasks
1. Log "Component loaded" only once using useEffect.
2. Show an alert when a button is clicked and a state changes.
3. Watch a text state and console log whenever it changes.
4. Set the document title dynamically based on a state (e.g., You clicked X times).
5. Use a timer to count seconds since component mounted.

