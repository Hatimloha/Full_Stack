# React Day 1: Introduction & JSX

## 🔹 What is React?
> React is a JavaScript library for building user interfaces, especially single-page applications (SPAs).
> It focuses on components — reusable pieces of UI.

## 🔹 Why React?
- Component-based
- Virtual DOM (faster updates)
- Declarative (you describe the UI, React builds it)
- Huge community & ecosystem

## 🧠 JSX (JavaScript XML)
## 🔸 What is JSX?
> JSX lets you write HTML-like code inside JavaScript. It gets compiled to React.createElement() calls.
```jsx
const element = <h1>Hello, Hatim!</h1>;
```

## 🔸 JSX Rules
- Return a single parent element
- Use className instead of class
- Use {} for JS expressions inside JSX

### ✅ Example 1: Simple JSX Element
```jsx
const greeting = <h1>Hello, React</h1>
```

### ✅ Example 2: Embedding JS in JSX
```jsx
const name = "Hatim";
const element = <h1>Hello, {name}!</h1>;
```
### ✅ Example 3: Multiple Elements (Wrap in div or fragment)
```jsx
return(
    <div>
        <h1>Hello</h1>
        <p>This is a paragraph.</p>
    </div>
);
```
