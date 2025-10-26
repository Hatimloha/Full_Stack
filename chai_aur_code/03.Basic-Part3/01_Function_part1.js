// Function Syntax:
/*
function myFun() {
    console.log('This is my first function')
}
myFun() // calling function for execution
myFun // This is use to give the refrence of the function
*/

// Argument & Parameter: 
// Parameters are => n1, n2
function addTwoNumbers(n1, n2){
    console.log(n1 + n2);
}
addTwoNumbers(8, 5) // Argument: 8 & 5

const result = addTwoNumbers(9 , 10);
console.log(result) // value + undefined
// When we are using the console.log function do not return any value

// Return: 
function add(num1, num2) {
    let result1 = num1 + num2;
    return result1
    console.log('Hitest') // In JS after declaring return before console.log it will not work
    // Error: unreachable code detected
}

const result1 = add(5, 10)
console.log(result1) // 15

// userloggin function
function loginUserMessage(username) {
    return `${username} just logged in`
}
loginUserMessage('hitesh') // function will execute but no output will print on screen console.log not use
 
console.log(loginUserMessage('')) //  just logged in

console.log(loginUserMessage()) // no argument
// imp: undefine just logged in

// Check value before execution:
function myFunNew(name){
    if(!name){ 
        return 'Please enter the name'
    }
    return `My name is ${name}`
}
console.log(myFunNew())

// Default Parameter: 
/*
function myFunNew(name = 'Samay'){
    return `My name is ${name}`
}
console.log(myFunNew())
Now if we dont give any parameter value it will take default one so no error in case of absence value
*/

// rest operator:
// ...num1 => When we use ... in the function it become rest operator
// Below is example when we dont know the number of input will come in the function by the end user
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,40)) // [ 200, 300, 400, 40 ]

// Example: Multiple paramenter & rest operator:
function calculateCartPrice1(val1, val2, ...num2){
    return num2
}
console.log(calculateCartPrice1(200,300,400,40))  //[ 400, 40 ]


// Object and function:
const user = {
    username: 'Rahul',
    price: 399
};

function handleObject(anyObject){
    console.log(`The user name is ${anyObject.username} & the price is ${anyObject.price}`)
}
handleObject(user) // The user name is Hatim & the price is 399

// Another Method for above example value:
handleObject({
    username: 'Rahul',
    price: 399
})

// Array in function:
const arr = [200,300,400]

function newArray(getArray){
    return getArray[1]
}
console.log(newArray(arr)) // 300

// Another Method for above example value:
console.log(newArray([200,300,400, 500]))

