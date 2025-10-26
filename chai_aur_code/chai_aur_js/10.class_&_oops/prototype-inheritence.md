## JavaScript
- Every thing in JS is a object.
- Then end of prototype is null
- JS have behaviour to to try it best to find the result otherwise null to avoid error.

<!-- Function is also a object POV -->
```js
function multi(nums){
    return num*nums
}
multi.power = 2
console.log(multi(5)) // 25
console.log(multi.power) // 2
console.log(multi.prototype) // {}
```

<!-- Example: custom prototype function -->
```js
function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`)
}

const chai = new creteUser('chai', 25) // We need new keyword to print the value otherwise it will give error due to not having context
const chai = new creteUser('tea', 250)

chai.printMe()
```

<!-- Importan Points -->
- Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
