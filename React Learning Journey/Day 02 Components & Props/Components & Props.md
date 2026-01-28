# ⚛️ React Day 2: Components & Props

## 🔹 What are Components?
> Components are the building blocks of a React app. They are JavaScript functions that return JSX.

## There are 2 types:
- Functional Components (most common)
- Class Components (older, rarely used now)

### ✅ Functional Component Syntax
```jsx
function Welcome(){
    return <h1>Hello froma component!</h1>
}
```
> You use it like this in JSX:
```jsx
<Welcome />
```

### 🔹 Props (Short for “Properties”)
> Props let you pass data into components.

#### Example:
```jsx
function Greet(props){
    return <h2>Hello, {props.name}!</h2>
}

<Greet name="Hatim" />
```

### ✅ Multiple Props Example:
```jsx
function Info(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

<info title="React" description="Library for building UIs" />
```

### ✅ Destructuring Props
```jsx
function Greet({name}){
    return <h2>Hello, {name}</h2>
}
```
