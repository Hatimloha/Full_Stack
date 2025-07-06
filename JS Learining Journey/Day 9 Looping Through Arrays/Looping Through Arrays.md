# Theory:
> To access each item in an array (one by one), we use loops like

### for Loop:
```js
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### for...of Loop (Recommended for arrays)
```js
for(let fruit of fruits){
    console.log(fruits);
}
```

### forEach() Method
```js
fruit.foreach(function(fruits){
    console.log(fruits);
})
```
> Or with arrow function:

```js
fruits.foreach(fruit => console.log(fruit))
```

## ✅ Comparison Table:
Loop Type |	Use Case
for	      | When you need index
for...of  | Cleanest for values only
forEach() | Functional style, shorter syntax
