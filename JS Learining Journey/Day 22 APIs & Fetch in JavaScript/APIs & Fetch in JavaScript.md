# Day 22 – APIs & Fetch in JavaScript

## 🌐 What is an API?
> An API (Application Programming Interface) lets your JavaScript code communicate with external servers or services to get or send data.

#### For Example: 
- Get weather data 🌤️
- Show user profiles
- Fetch posts from a blog

### ✅ What is fetch()?
> fetch() is a built-in JavaScript function to make HTTP requests.

#### 📘 Syntax:
```js
fetch(url){
    .then(response => response.json);
    .then(data => console.log(data));
    .then(error => console.log("Error: ", error))
}
```

### 🧪 Example: Get Random Joke from Public API
```js
<h1 id="joke">Click to load a joke</h1>
<button onclick="getJoke()">Get Joke</button>

<script>
    function getJoke(){
        fetch("https://official-joke-api.appspot.com/random_joke");
        .then(response => response.json());
        .then(data => {
            document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;  
        })
        .catch(err => console.log("Error:", err));
    }
</script>
``` 