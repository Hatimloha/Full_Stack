# Theory:

## What are DOM Events?

> Events are actions that happen in the browser — like:
- Event Type	    | Triggered When...
- click	            | An element is clicked
- mouseover	        | You hover over an element
- mouseout	        | You move the mouse away
- change	        | A form field (like <select>) changes
- input	            | You type inside a text field
- keydown	        | A key is pressed
- submit	        | A form is submitted

> You can handle these with event listeners.

#### 🔧 2. Syntax: addEventListener()
```js
element.addEventListener("event", function);
```

#### Example:
```js
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function(){
    alert("Button Clicked !!")
});
```

> You can also use arrow functions:
```js
btn.addEventListener("click", () => {
    console.log("Clicked with arrow function!")
})
``` 
