# Day 23 – async/await, try-catch, and Multiple Fetch Calls

## What is async and await?
- async turns a function into a Promise.
- await pauses the execution until a Promise is resolved.
- Helps avoid nested .then() chains (Callback Hell).

### ✳️ Basic Structure
```js
async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}
```

## ⚠️ Why Use try...catch?
> Because network/API calls can fail:
- Server down
- Wrong URL
- No internet
- API limit reached

