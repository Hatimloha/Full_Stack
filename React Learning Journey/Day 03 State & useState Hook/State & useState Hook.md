# ⚛️ React Day 3: State & useState Hook

## 🔹 What is State?
> State is like a component's memory — it stores dynamic values that change over time (e.g., input values, counters, toggles).
> In React, we use the useState hook to create and update state in functional components.

## 🔹 useState Syntax:
```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```

### ✅ Example: Counter
```jsx
import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
```
- count: current value
- setCount: function to update value
- useState(0): initial value is 0

## ✅ Update Rules:
- Do not modify state directly (count++ ❌)
- Always use the setter: setCount(count + 1) ✅

### ✅ Another Example: Text Input
```jsx
function NameInput(){
    const [name, setName] = setState("");

    return (
        <div>
            <input value = {name} 
            onChange{(e) => setName(e.target.value)};
            placeholder="Enter the name."
            />

            <p>Hello, {name}<p>
        </div>
    )
}