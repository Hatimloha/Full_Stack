# 🧠 Day 20: Use Arrays with DOM (Add/Remove/Render Items)
> We’ll learn how to:
- Store user input in an array
- Display it dynamically on the page
- Add or remove items from the array
- Update the DOM accordingly

### ✅ Example Project: Add Items to a List
```html
<!DOCTYPE html>
<html>
<head>
  <title>Array & DOM</title>
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
    }
  </style>
</head>
<body>

  <h2>Enter Fruit Name</h2>
  <input type="text" id="fruitInput" placeholder="e.g. Mango">
  <button onclick="addFruit()">Add Fruit</button>

  <ul id="fruitList"></ul>

  <script>
    const fruits = []; // array to store items
    const input = document.getElementById("fruitInput");
    const list = document.getElementById("fruitList");

    function addFruit() {
      if (input.value !== "") {
        fruits.push(input.value);
        renderList();
        input.value = ""; // clear input
      }
    }

    function renderList() {
      list.innerHTML = ""; // clear previous list
      fruits.forEach((fruit, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${fruit}`;
        list.appendChild(li);
      });
    }
  </script>

</body>
</html>
```

> What You Learned:
- Store input in an array (fruits.push)
- Dynamically generate <li> elements from that array
- Keep the DOM updated using .innerHTML and .appendChild()