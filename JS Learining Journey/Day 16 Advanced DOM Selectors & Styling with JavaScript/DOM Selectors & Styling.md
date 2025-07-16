# Theory
> Now that you know basic DOM access (getElementById, querySelector), let’s learn how to:
- Select multiple elements with querySelectorAll
- Add/Remove classes with classList
- Change styles dynamically with .style

#### ✅ querySelectorAll()
```js
const item = document.querySelectorAll(".list-item");

items.forEach(item => {
    items.style.color = "red";
});
```

#### ✅ classList Methods:
Method	            | What it does
.add("class")	    | Adds a class
.remove("class")    | Removes a class
.toggle("class")    | Toggles a class on/off
.contains("class")  | Checks if class exists

- Example:
```js
element.classList.add("active");
element.classList.toggle("dark-theme");
```

#### ✅ Changing CSS with .style
```js
element.style.color =  "blue";
element.style.fontSize = "24px"
```
