# Theory
> The this keyword refers to the object that is executing the current function.

#### ✅ Case 1: this Inside an Object Method
```js
const user = {
    name: "hatim",
    greet(){
        console.log("Hello, " + this.name);
    }
};

user.greet() //output: Hello, Hatim

// Here, this.name refers to the user object itself.
```

#### ❌ Case 2: this in a Regular Function (Outside Object)
```js
function show(){
    console.log(this);
}

show() // In browser: Window object
```
> In non-strict mode, this refers to the global object (window in browsers).
> In strict mode, this is undefined.

#### ⚠️ Case 3: this in Arrow Functions
```js
const user = {
    name: "Hatim",
    greet: () => {
        console.log("Hello, " + this.name);
    },
};

user.greet();
```
> ❗ this inside an arrow function does NOT refer to the object — it uses this from the outer scope.
> So avoid arrow functions as methods inside objects.

#### ✅ Case 4: this in Event Handlers (Browser)
```html
<button onclick="clickMe()">Click</button>

<script>
    function clickMe(){
        console.log(this)   // Refers to the button element
    }
    clickMe()
</script>
```

### ✅ Summary Table:
Where it's used	        | this refers to...
In a method	            | The object calling the method
In a function (global)	| window (or undefined in strict mode)
In arrow functions	    | The this from outer scope
In event handlers	    | The element receiving the event

