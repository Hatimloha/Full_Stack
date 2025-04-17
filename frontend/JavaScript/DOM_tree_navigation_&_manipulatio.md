#  DOM tree navigation and manipulation
> This s super important for real-world JavaScript work. Let me explain each term clearly with examples so you can visualize how they work.

## 1. childNodes
- What it does: Returns a NodeList of all child nodes of an element — including text nodes (like whitespace).
```javascript
let container = document.getElementById("container");
console.log(container.childNodes); // Includes text nodes and <p> elements
```
```html
<div id="container">
  <p>Hello</p>
  <p>World</p>
</div>
```

## 2. children (or sometimes called childElements)
- What it does: Returns an HTMLCollection of only the element nodes (ignores text/whitespace).
```javascript
console.log(container.children); // Only the <p> elements, no text nodes
```
## 3. firstChild
- What it does: Returns the first child node, even if it’s a text node.
```javascript
console.log(container.firstChild); // Might be a text node like whitespace
```
## 4. firstElementChild
- What it does: Returns the first child that is an element, skipping whitespace and text nodes.
```javascript
console.log(container.firstElementChild); // First <p>
```
## 5. lastChild
- What it does: Returns the last child node, including text nodes.
```javascript
console.log(container.lastChild);
```
## 6. lastElementChild
- What it does: Returns the last child that is an element (no text nodes).
```javascript
console.log(container.lastElementChild);
```
## 7. appendChild()
- What it does: Adds a node as the last child of an element.
```javascript
let newP = document.createElement("p");
newP.textContent = "I'm new here!";
container.appendChild(newP);
```

## 8. removeChild()
- What it does: Removes a specified child from a parent node.
```javascript
let firstPara = container.firstElementChild;
container.removeChild(firstPara);
```
## 9. replaceChild(newNode, oldNode)
- What it does: Replaces an existing child with a new node.
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Replacement";
let oldPara = container.firstElementChild;
container.replaceChild(newDiv, oldPara);
```
## 10. parentNode
- What it does: Returns the parent node of an element.
```javascript
let parent = container.firstElementChild.parentNode;
console.log(parent); // returns the container div
```
## 11. nextSibling / previousSibling
- nextSibling: Gets the next node, including text.
- previousSibling: Gets the previous node, including text.
```javascript
let first = container.firstElementChild;
console.log(first.nextSibling); // the next <p>

```
## 12. nextElementSibling / previousElementSibling
- These skip text nodes and return only element siblings.
```javascript
let first = container.firstElementChild;
console.log(first.nextElementSibling); // the next <p>
```

## 13. cloneNode(deep)
- Creates a copy of a node. Use `true` to clone all child elements (deep clone).
```javascript
let copy = container.cloneNode(true);
document.body.appendChild(copy);
```

## 14. contains()
- Checks if a node is inside another node.
```javascript
console.log(container.contains(newP)); // true or false
```
## 15. nodeName
- Returns the name of the node (e.g., DIV, P, etc.).
```javascript
console.log(container.nodeName); // "DIV"
```
## 16. nodeType
- Returns the type of node as a number:
  - 1 = Element node
  - 3 = Text node
  - 8 = Comment node
```javascript
console.log(container.nodeType); // 1
```
## 17. nodeValue
- Gets or sets the value of a text node.
```javascript
let textNode = container.firstChild;
console.log(textNode.nodeValue);
```
## 18. innerText
- Gets or sets only the visible text inside an elemen
```javascript
console.log(container.innerText);
```
## 19. innerHTML
- Gets or sets the HTML content inside an element.
```javascript
container.innerHTML = "<p>Updated!</p>";
```
## 20. outerHTML
- Gets or sets the entire HTML content including the element itself.
```javascript
console.log(container.outerHTML);
```

## 21. textContent
- Gets or sets all text content, including hidden text.
```javascript
console.log(container.textContent);
```

## 22. insertBefore(newNode, existingNode)
- Inserts a new node before a specified existing node.
```javascript
let newHeading = document.createElement("h2");
newHeading.textContent = "Before the first para";
container.insertBefore(newHeading, container.firstElementChild);
```
## 23. hasChildNodes()
- Checks whether a node has any child nodes.
```javascript
console.log(container.hasChildNodes()); // true or false
```
## 24. isEqualNode(node)
- Compares two nodes to check if they are equal.
```javascript
console.log(node1.isEqualNode(node2)); // true or false
```
## 25. normalize()
- Combines adjacent text nodes into a single node.
```javascript
container.normalize();
```
