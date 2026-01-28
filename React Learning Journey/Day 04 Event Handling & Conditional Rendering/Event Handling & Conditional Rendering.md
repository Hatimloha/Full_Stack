# ⚛️ React Day 4: Event Handling & Conditional Rendering

## 🔹 1. Event Handling in React
> React uses camelCase event names and functions to handle UI actions like clicks, typing, form submission, etc.

### ✅ Example: Button Click
```jsx
function ClickExample() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```
- Use onClick, onChange, onSubmit, etc.
- The handler is just a function

## 🔹 2. Passing Event Object
> You can access the event object by passing event into your handler.
```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};
```

## 🔹 3. Conditional Rendering in JSX
> Use if, ternary operator, && to conditionally show or hide JSX.

- ✅ Using Ternary Operator
```jsx
{isLoggedIn ? <p>Welcome Back!</p> : <p>Please Login!</p>}
```
- ✅ Using &&
```jsx
{showMessage && <p>This is a message</p>}
```

### ✅ Example: Login Toggle
```jsx
function LogginToggle() {
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div>
            <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "login"}</button>
            <p>{loggedIn ? "Welcome, Hatim!" : "Please log in."}<p>
        </div>
    )
}
```