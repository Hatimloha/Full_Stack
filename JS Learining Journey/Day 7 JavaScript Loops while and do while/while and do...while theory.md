# Theory:
> These loops are used when the number of iterations is not always known in advance.

### while Loop
> Runs as long as the condition is true.

#### Syntax:
```js
while (condition) {
  // code to execute
}
```

#### Example:
```js
let i = 1;
while (i <= 5) {
  console.log("Number:", i);
  i++;
}
```


### do...while Loop:
> Runs at least once, then checks the condition.

#### Syntax
```js
do {
  // code to execute
} while (condition);
```

#### Example:
```
let i = 1;
do{
    console.log("Running", i);
    i++
}while(i <= 3>)
```