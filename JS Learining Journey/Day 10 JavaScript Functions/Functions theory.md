# Theory
> A function is a reusable block of code that performs a specific task.
> You write it once, use it many times.

### Function Syntax:
```js
function functionName(parameters) {
  // code to run
  return result; // optional
}
```

- functionName: the name of the function
- parameters: values passed into the function
- return: sends a result back to where the function was called


#### Example:
```js
function great(name){
    return "Hello, " + name + "!";
}

let message = great(Hatim);
console.log(message);
```

#### Calling a Function:
```js
greet("Ali");
greet("Sara");
```

