// There are 3 type of Execution context:
/*
1. Global Execution Context 
2. function Execution Context 
3. eval Execution Context 
*/ 

// Type of Phase: 
/*
1. Memory creation phase: memory allocate for variable
2. Execution Phase: programm execute here
*/

// Execution Cycle: 
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result = addNum(val1, val2);
let result2 = addNum(5,10)

/*
1. Global phase: 
=> this

2. Memory Phase: 
=> val1 = undefine
=> val2 = undefine
=> addNum = definatin
=> result = undefine;
=> result2 = undefine;

3. Execution Phase: 
=> val1 = 10
=> val2 = 5
=> addNum =
// New Box will create every time 
[
new variable environment + execution thread
// Now cycle will run again:
1. Memory Phase
val1 = undefined
val2 = undefined
totol = undefined

2. Execution Pase
num1 = 10
num1 = 5
total = 15 (The calculated value will go here)

// Now total value will be return to global execution context: 
]
Imp: After the execution finish the box will be deleted

*/



// Call Stack: 
/*
|---------------|
|               |
|---------------|
|---------------|
|               |
|---------------|
|---------------|
|    addNum()   | // Once work finish it will be remove by the stack
|---------------|
|---------------|
|   Global Exe  |
|---------------|

*/


// Example: function inside a function: 
// => LIFO: Last In First Out

function one(){
    console.log('Function one')

    function two(){
        console.log('Function two');

            function three(){
                console.log('function three')
            }
            three()
    }
    two()
}

one();
/*
Output: 
Function one
Function two
function three
*/