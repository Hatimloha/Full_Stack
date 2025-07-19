# Day 24: POST Data Using fetch() (Send Data to an API)
> Use fetch() with the POST method to send data to a fake API and show a success message.
- We'll use this fake test API:
> https://jsonplaceholder.typicode.com/posts

### 🧪 Task:
- Create an input box for title and a button to submit.
- When the user clicks submit:
- Send the title to the API using fetch() and method "POST".
- Display a message like ✅ "Data posted successfully!"

### ✅ Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>POST Data Using fetch()</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
    }

    input {
      padding: 10px;
      font-size: 18px;
      width: 300px;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      margin-left: 10px;
      cursor: pointer;
    }

    h3 {
      color: green;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h1>Send Post Title to API</h1>
  <input type="text" id="titleInput" placeholder="Enter post title">
  <button onclick="postData()">Submit</button>
  <h3 id="message"></h3>

  <script>
    async function postData() {
      const title = document.getElementById("titleInput").value;
      const message = document.getElementById("message");

      if (!title.trim()) {
        message.style.color = "red";
        message.textContent = "❌ Please enter a title!";
        return;
      }

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            title: title,
            body: "This is a dummy body",
            userId: 1
          })
        });

        const data = await res.json();
        console.log("Response:", data);
        message.style.color = "green";
        message.textContent = "✅ Data posted successfully!";
        document.getElementById("titleInput").value = "";

      } catch (error) {
        console.error(error);
        message.style.color = "red";
        message.textContent = "❌ Failed to post data!";
      }
    }
  </script>

</body>
</html>
```