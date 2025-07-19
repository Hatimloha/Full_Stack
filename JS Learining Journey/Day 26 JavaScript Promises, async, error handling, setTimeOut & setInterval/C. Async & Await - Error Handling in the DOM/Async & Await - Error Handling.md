# 🚨 Final Async/Await Topic: Error Handling in the DOM
> Let’s handle errors gracefully when an API fails, and show a user-friendly message instead of breaking the page.

✅ Example Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Error Handling with Fetch</title>
</head>
<body>
  <h2>Post Title:</h2>
  <p id="postTitle">Click to load post</p>
  <button onclick="loadPost()">Load Post</button>

  <script>
    async function  loadPost() {
        const postTitle = document.getElementById("postTitle");
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/postz/1");
            if(!res.ok){
                throw new Error("API return error: " + res.status);
            }
            const post = await res.json();
            postTitle.textContent = post.title;
        }catch(error){
            postTitle.textContent = "🚫 Failed to fetch post. Please try again later.";
        console.error("Error:", error.message);
        }
    }
  </script>
</body>
</html>
```