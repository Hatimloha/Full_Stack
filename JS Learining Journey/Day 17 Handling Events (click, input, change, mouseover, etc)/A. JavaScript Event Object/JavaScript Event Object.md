# Theory: 

### 🔹 What is the event object?

> Whenever an event happens (like click, submit, keydown, etc.), JavaScript automatically passes an event object to your handler function. This object contains details about the event — like which element was clicked, which key was pressed, and much more.

> 🔧 Common Properties of event:
- Property	                | Description
- event.target	            | The actual HTML element that triggered the event
- event.type	            | Type of the event (e.g., "click", "submit")
- event.preventDefault()	| Prevents the default behavior (e.g., form submission)
- event.key	                | The key that was pressed (for keyboard events)


#### ✅ Example 1: Use event.target to Log Clicked Button
```js
<button onclick="showDetails(event)">Click Me</button>

<script>
  function showDetails(event) {
    console.log("You clicked:", event.target);  // <button> element
    console.log("Text inside button:", event.target.textContent);
  }
</script>
```

#### ✅ Example 2: Use event.preventDefault() to Stop Form Refresh
```js
<form id="demoForm">
    <input type="text" id="nameInput" placeholder="Enter the name" required>;
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("demoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("From submitted: " + document.getElementById("nameInput").value)
    });
</script>
```

#### ✅ Example 3: Detect Which Key Was Pressed
```js
<input type="text" placeholder="Type something" onkeydown="logKey(event)">

<script>
  function logKey(event) {
    console.log("Key Pressed:", event.key); // e.g., "a", "Enter"
  }
</script>
```

