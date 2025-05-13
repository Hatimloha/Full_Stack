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
