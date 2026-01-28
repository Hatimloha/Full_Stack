# Day 27 – Web Storage in JavaScript (localStorage & sessionStorage)

> Web Storage allows you to store data in the user's browser. It's useful for saving preferences, user data, etc.

## 🧠 Concepts Covered
- localStorage vs sessionStorage
- Storing and retrieving simple and complex data
- Removing and clearing storage

## 📘 Differences
- Feature	          | localStorage	                    | sessionStorage
- Scope	              | Window	                            | Window
- Expiry	          | Never (until manually cleared)	    | Clears on tab close
- Storage             | limit	~5MB	                    | ~5MB
- Shared across tabs  |✅ Yes	                           | ❌ No

### ✅ Example 1: Set and Get Item from localStorage

```html
<input type="text" id="nameInput" placeholder="Enter your name" />
<button onclick="saveName()">Save</button>
<button onclick="showName()">Show</button>
<p id="result"></p>

<script>
  function saveName(){
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
  }

  function showName(){
    const storeName = localStorage.getItem("username");
    const result = document.getElementById("result");
    result.textContent = `Hello ${storeName}`
  }
</script>
```

### ✅ Example 2: Save Array or Object in localStorage
```js
const user = {
    name: "Hatim";
    age: 25;
};

localStorage.setItem("user", JSON.stringify(user));

// To retrieve
const storeUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Hatim
```

### ✅ Example 3: Remove or Clear
```js
localStorage.removeItem("username");
localStorage.clear();
```

