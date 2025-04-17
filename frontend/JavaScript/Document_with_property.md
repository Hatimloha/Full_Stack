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
- Use case: Selects all elements of a specific tag "<p> | <div> etc."
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

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```

## 2
-
-
```javascript

```
