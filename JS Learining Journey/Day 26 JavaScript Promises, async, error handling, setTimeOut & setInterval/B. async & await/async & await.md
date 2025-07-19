# JavaScript Day 26: async / await:

> Now that you've practiced .then() chaining, it's time to simplify async code using async/await, which makes it cleaner and easier to read.

## What is async/await?
- async turns a function into a promise-returning function.
- await pauses execution until the promise resolves.

### 🧠 Syntax
```js
async function myFunction(){
    let result = await someAsyncFunction();
    console.log(result)
}
```

### 🧪 Simple Example
```js
function fetchMessage(){
    return new Promise((resolve) => {
        setTimeOut(() => {
            resolve("Hello from promise!");
        }, 1000)
    });
}

async function showMessage(){
    let msg = await fetchMessage();
    console.log(msg);
};

showMessage()
```