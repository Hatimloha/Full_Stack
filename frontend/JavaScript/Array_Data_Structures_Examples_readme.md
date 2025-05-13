# Working with arrays in JavaScript
-  forEach
-  filter
-  map

## 1. The forEach() method
```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
```
The result of running the above code is this:  
```
0. kiwi
1. mango
2. apple
3. pear
```

### Example 2
```js
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
```
Output:
```
0. onion
1. garlic
2. potato
```

## 2. The filter() method
```js
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
    console.log(result);
})
```
Output:
```
[30,40,50]
```

## 3. The map method
```js
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
```
Output:
```
[0,1,2,3,4,5]
```

## Working with Objects in JavaScript

### Example 1
```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
```
Output:
```
['speed',100,'color','yellow']
```

## Working with Maps in JavaScript
### Example 1
```js
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
```
Output:
```
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // 'The Champion'
```

## Working with Sets in JavaScript
### Example 1
```js
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
```
Output:
```
{'apple', 'pear', 'plum'}
```


