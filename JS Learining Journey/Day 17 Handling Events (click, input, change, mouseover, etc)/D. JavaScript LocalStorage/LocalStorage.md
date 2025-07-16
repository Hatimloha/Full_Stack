# Theory:
> Let’s now move to the next practical step: storing and retrieving fruits from LocalStorage so your data doesn’t disappear on refresh.

### 🧠 localStorage
- Stores data in key–value pairs as strings
- Persists even after the page reloads

#### Syntax:
```js
localStorage.setItem("key", JSON.stringify(data));
let data = JSON.parse(localStorage.getItem("key"));
localStorage.removeItem("Key");
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Fruit List with LocalStorage</title>
  <style>
    body {
      text-align: center;
      font-family: Arial;
      margin-top: 100px;
    }
    input, button {
      padding: 10px;
      font-size: 18px;
      margin: 10px;
    }
    ul {
      list-style: none;
      font-size: 20px;
      padding: 0;
    }
    li {
      margin: 5px;
    }
    .delete-btn {
      margin-left: 20px;
      color: red;
      cursor: pointer;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h2>Add Fruit (with Price)</h2>
  <input type="text" id="fruitName" placeholder="Fruit Name">
  <input type="number" id="fruitPrice" placeholder="Price">
  <button onclick="addFruit()">Add Fruit</button>

  <ul id="fruitList"></ul>

  <script>
    let fruits = JSON.parse(localStorage.getItem("fruits")) || [];

    function addFruit() {
      const name = document.getElementById("fruitName").value.trim();
      const price = document.getElementById("fruitPrice").value.trim();

      if (name && price) {
        fruits.push({ name, price: Number(price) });
        saveToLocal();
        renderList();
        document.getElementById("fruitName").value = "";
        document.getElementById("fruitPrice").value = "";
      }
    }

    function deleteFruit(index) {
      fruits.splice(index, 1);
      saveToLocal();
      renderList();
    }

    function saveToLocal() {
      localStorage.setItem("fruits", JSON.stringify(fruits));
    }

    function renderList() {
      const fruitList = document.getElementById("fruitList");
      fruitList.innerHTML = "";

      fruits.forEach((fruit, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${fruit.name} - ₹${fruit.price}`;

        const delBtn = document.createElement("span");
        delBtn.textContent = "❌";
        delBtn.className = "delete-btn";
        delBtn.onclick = () => deleteFruit(index);

        li.appendChild(delBtn);
        fruitList.appendChild(li);
      });
    }

    // Show saved list on page load
    renderList();
  </script>
</body>
</html>
```
> ✅ What This Does:
- Adds fruits with name and price.
- Stores in localStorage using .setItem().
- Loads saved data on refresh with .getItem().
- Deletes specific items and updates localStorage.

> Next Option (let me know):
- Add edit functionality
- Add total price calculation
- Add sort by price or name
- Create a clear all button
