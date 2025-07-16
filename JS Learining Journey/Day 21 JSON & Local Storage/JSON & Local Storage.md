# Day 21 – JSON & Local Storage
> a core concept for any web developer. Let’s make it clear and practical.

## 📦 1. What is JSON?
### ✅ JSON (JavaScript Object Notation):
> A lightweight format to store and exchange data. It looks like an object, but it's a string.
```js
let obj = {name: "Hatim", age: 24};
let json = JSON.stringify(obj);
console.log(json);
```

### 🔄 JSON Methods:
> JSON.stringify(obj) → Converts object to JSON string
> JSON.parse(json) → Converts JSON string back to object

#### Example: 
```js
let jsonData = '{"name":"Hatim","age":22}';
let data = JSON.parse(jsonData);
console.log(data);
```

## 🗃 2. What is Local Storage?
> A browser feature that stores data permanently (until manually cleared).
- Data is stored as key-value pairs.
- Values must be stored as strings.

### 🔧 Local Storage Methods:
```js
// Store
localStorage.setItem("username", "Hatim");
```
```js
// Retrieve
let name = localStorage.getItem("username");
```

```js
// Remove
localStorage.removeItem("username");
```

```js
// RemoClear all
localStorage.clear()
```

#### 🔄 Store Objects in LocalStorage (Important!)
```js
let user = {name: "Hatim", city: "Udaiput"};
// Store object
localStorage.setItem("userData", JSON.stringify(user));
// Retrieve and parse
let data = JSON.parse(localStorage.getItem("userData"))
console.log(data.name); // Hatim
```

