# When working with the DOM in JavaScript, selectors help you target elements in your HTML.
> 5 main types of selectors in JavaScript:

##  1. ID Selector
- Use Case: When you need to select one specific element by its unique id.
```javascript
document.getElementById("idName")
```
```javascript
<p id="message">Hello!</p>
```
```javascript
let msg = document.getElementById("message");
msg.style.color = "blue";
```

## 2. Class Selector
- Use Case: To select multiple elements sharing the same class.
```javascript
document.getElementsByClassName("className")
```
```javascript
<div class="box">Box 1</div>
<div class="box">Box 2</div>
```
```javascript
let boxes = document.getElementsByClassName("box");
boxes[0].style.backgroundColor = "yellow";
```

## 3. Tag Selector
- Use Case: When you want to select all elements with the same tag like p, div, etc.
```javascript
document.getElementsByTagName("tagName")
```
```javascript
<p>Hello</p>
<p>World</p>
```
```javascript
let paras = document.getElementsByTagName("p");
console.log(paras.length); // 2
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
