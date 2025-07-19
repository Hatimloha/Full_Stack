# Day 26: JavaScript Promises

## What is a Promise?
> A Promise in JavaScript is a way to handle asynchronous operations. It's like a placeholder for a future value.

### It has 3 states:
- Pending – The initial state (not yet resolved or rejected)
- Resolved – The operation completed successfully
- Rejected – The operation failed

#### A Promise looks like this:
```js
let promise = new Promise((resolve, reject) => {
    // Do some async task
    if (success) {
        resolve(result);   // Task successful
    } else {
        reject(error);     // Task failed
    }
});
```
> You handle it using .then() for success and .catch() for error.

