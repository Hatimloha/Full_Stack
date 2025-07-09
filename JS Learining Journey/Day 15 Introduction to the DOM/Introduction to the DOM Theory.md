# Theory: 

> Q1: Theory: What is the DOM?
> The DOM (Document Object Model) is a tree-like structure that represents the content of an HTML page.

#### JavaScript uses the DOM to:
- ✅ Access
- ✅ Modify
- ✅ Add
- ✅ Remove HTML elements & styles.

#### 🌐 Example HTML:
```html
<h1 id="title">Welcome!</h1>
<button onclick="changeText()">Click Me</button>
```
```js
document.getElementById("title").innerText = "Hello, Hatim!"
```

#### Basic DOM Methods:
       Method	            |           Description
> getElementById("id")	    | Selects a single element by ID
> getElementsByClassName()    | Selects elements by class name (HTMLCollection)
> getElementsByTagName()	    | Selects elements by tag (HTMLCollection)
> querySelector()	            | Selects the first matching element (CSS-style selector)
> querySelectorAll()	        | Selects all matching elements (NodeList)


