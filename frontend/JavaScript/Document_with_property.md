# Common document. Methods and Properties:

## 1 document.getElementById("id")
- Use case: Selects an element by its unique ID.
- ✅ Most commonly used to change text, style, or content.
```javascript
document.getElementById("myPara").innerText = "Updated!";
```

## 2 document.getElementsByClassName("class")
- Use case: Selects all elements with a specific class name (returns a collection).
```javascript
let elements = document.getElementsByClassName("box");
elements[0].style.backgroundColor = "yellow";
```

## 3 document.getElementsByTagName("tag")
- Use case: Selects all elements of a specific tag "p, div, etc"
```javascript
let allParas = document.getElementsByTagName("p");
console.log(allParas.length);
```

## 4 document.querySelector("selector")
- Use case: Selects the first element that matches a CSS-style selector
```javascript
document.querySelector(".box").style.color = "red";
```

## 5. document.querySelectorAll("selector")
- Use case: Selects all matching elements.
```javascript
let items = document.querySelectorAll(".box");
items.forEach(item => item.style.border = "1px solid black");
```

## 6. document.createElement("tag")
- Use case: Dynamically create new HTML elements with JS.
```javascript
let newDiv = document.createElement("div");
newDiv.innerText = "I was created with JavaScript!";
document.body.appendChild(newDiv);
```

## 7. document.body
- Use case: Access the <body> of the document.
```javascript
document.body.style.backgroundColor = "lightblue";
```

## 8. document.title
- Use case: Get or set the page title (the one shown in the browser tab).
```javascript
console.log(document.title); // Get
document.title = "New Title"; // Set
```

## 9. document.innerHTML
- Use case: Set or get the HTML content inside an element.
```javascript
document.getElementById("content").innerHTML = "<b>Bold text</b>";
```

## 10. document.addEventListener("event", function)
- Use case: Attach event listeners to the document (or any element).
```javascript
document.addEventListener("click", function () {
    alert("Document was clicked!");
});
```

## 11. document.forms
- Use case: Access all forms in the document.
```javascript
let myForm = document.forms[0];
console.log(myForm.action);
```

## 12. document.images
- Use case: Access all <img> tags on the page.
```javascript
let imgs = document.images;
console.log("Total images:", imgs.length);
```

## 13. document.links
- Use case: Get all the <a> elements (hyperlinks).
```javascript
let links = document.links;
for (let link of links) {
    console.log(link.href);
}
```

## 14. document.head
- Use case: Access the <head> section of your HTML document.
```javascript
console.log(document.head.innerHTML);
```

## 15. document.cookie
- Use case: Get or set cookies on the client side.
```javascript
document.cookie = "username=Hatim; expires=Fri, 31 Dec 2025 12:00:00 UTC";
console.log(document.cookie);
```

## 16. document.readyState
- Use case: Check if the document has finished loading.
```javascript
if (document.readyState === "complete") {
    console.log("Document fully loaded");
}
```

## 17. document.activeElement
- Use case: Know which element currently has focus.
```javascript
console.log("Focused element is:", document.activeElement);
```

## 18. document.elementFromPoint(x, y)
- Use case: Returns the top-most element at the specified (x, y) position.
```javascript
document.addEventListener("click", function(event) {
    let el = document.elementFromPoint(event.clientX, event.clientY);
    console.log("Clicked on:", el.tagName);
});
```

## 19. document.designMode = "on"
- Use case: Makes the whole page editable!
```javascript
document.designMode = "on"; // Try this in the console 😄
```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```


## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```

## 
-
```javascript

```


## 
-
```javascript

```

## 
-
```javascript

```
