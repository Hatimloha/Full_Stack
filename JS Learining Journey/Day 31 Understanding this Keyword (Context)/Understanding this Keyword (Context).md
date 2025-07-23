# Day 31 – Understanding this Keyword (Context)

> The this keyword refers to the object it belongs to. Its value depends on how a function is called:

## 🔹 1. this in a regular function
```js
function show(){
    console.log(this);  // In browser: refers to window
}

show()
```
##🔹 2. this in an object method
```js
const user = {
    name: "ravi";
    greet(){
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
```

## 🔹 3. this in arrow functions
> Arrow functions don't have their own this; they inherit it from the parent scope:
```js
const user = {
    name: "Hatim";
    greet: () => {
        console.log(`Hello ${this.name}`)
    }
}

user.greet();
```

## 🔹 4. this in Event Listeners
```html
<button id="myBtn">Click me</button>
<script>
    document.getElementById("myBtn").addEventListener("click", function() {
        console.log(this); // refers to the button
    });
</script>
```

## 🔹 5. Using bind, call, and apply to control this
```js
function greet(){
    console.log("Hi " + this.name)
}
const person = {name: "Hatim"};
greet.call(person) // Hi Hatim
```

