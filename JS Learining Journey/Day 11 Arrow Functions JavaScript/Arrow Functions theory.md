# Theory:
> Arrow functions are a shorter syntax for writing functions, introduced in ES6.

### Basic Syntax:
```js
const functionName = (parameters) => {
    // code
    return result;
};
```

> If there's only one parameter and one return statement, you can simplify:
```js
const square = num => num * num;
```

> If no parameters, use empty parentheses:
```js
const great = () => console.log("Hello!")
```

###  Traditional vs Arrow Function:
```js
// Traditional
function add(a, b){
    return a + b;
}
console.log(add(5,10));

// Arrow version
const add = (a,b) => a + b;
```