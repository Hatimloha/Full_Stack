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

## 20. document.getSelection()
- Use case: Returns the currently selected text on the page.
```javascript
document.addEventListener("mouseup", () => {
    let selected = document.getSelection().toString();
    console.log("You selected:", selected);
});
```

## 21. document.createTextNode()
- Use case: Create just text (without tags), then insert into the DOM.
```javascript
let text = document.createTextNode("Hello Hatim!");
document.body.appendChild(text);
```

## 22. document.importNode()
- Use case: Import a node from another document or template.
```javascript
// Used for templates or loading external fragments
```

## 23. document.adoptNode() 
- Use case: Adopts a node from another document — used with iframes or imported documents.

## 24. document.documentElement
- Use case: Refers to the <html> element.
```javascript
document.documentElement.style.backgroundColor = "#f0f0f0";
```

## 25. document.styleSheets
- Use case: Access all the stylesheets linked or written in your HTML.    
```javascript
console.log(document.styleSheets[0]);
```

## 26. document.scripts
- Use case: Returns a list of all <script> elements.
```javascript
console.log(document.scripts.length);
```

## 27. document.anchors
- Use case: Returns a list of all <a name="..."> anchors in the document (not commonly used anymore).
```javascript

```

## 28. document.hasFocus()
- Use case: Check if the browser tab is currently active.
```javascript
if (document.hasFocus()) {
    console.log("Tab is active");
}
```

## 29. document.onvisibilitychange (used with visibilityState)
- Use case: Know when the user switches tabs.
```javascript
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        console.log("User left the tab");
    } else {
        console.log("User returned to the tab");
    }
});
```

## 30. document.ondblclick, onkeydown, onmousemove, etc
- Attach events directly to the whole document.
```javascript
document.onkeydown = function(event) {
    console.log("Key pressed:", event.key);
};
```

> This content i have copy paste from Chatgpt (Easy to understand)
