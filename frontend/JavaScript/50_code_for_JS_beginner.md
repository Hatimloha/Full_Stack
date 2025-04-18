# 50 JavaScript Code Examples for Learning (Beginner):

- 1 HTML file: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>50 JavaScript Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        div {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h2 {
            margin-top: 0;
            font-size: 1.2em;
            color: #333;
        }
        p {
            margin: 5px 0;
            font-size: 1em;
            color: #444;
        }
        button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            margin-top: 10px;
        }
        button:hover {
            background-color: #367c39;
        }
        .consoleOutput {
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 10px;
            font-family: monospace;
            font-size: 0.9em;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h1>50 JavaScript Examples</h1>
    <div id="example1">
        <h2>Example 1: Variables and Data Types</h2>
        <div class="consoleOutput" id="output1"></div>
    </div>
    <div id="example2">
        <h2>Example 2: Arithmetic Operators</h2>
        <div class="consoleOutput" id="output2"></div>
    </div>
    <div id="example3">
        <h2>Example 3: String Concatenation</h2>
        <div class="consoleOutput" id="output3"></div>
    </div>
    <div id="example4">
        <h2>Example 4: Conditional Statements</h2>
        <div class="consoleOutput" id="output4"></div>
    </div>
    <div id="example5">
        <h2>Example 5: Arrays</h2>
        <div class="consoleOutput" id="output5"></div>
    </div>
    <div id="example6">
        <h2>Example 6: For Loop</h2>
        <div class="consoleOutput" id="output6"></div>
    </div>
    <div id="example7">
        <h2>Example 7: While Loop</h2>
        <div class="consoleOutput" id="output7"></div>
    </div>
    <div id="example8">
        <h2>Example 8: Functions</h2>
        <div class="consoleOutput" id="output8"></div>
    </div>
    <div id="example9">
        <h2>Example 9: Objects</h2>
        <div class="consoleOutput" id="output9"></div>
    </div>
    <div id="example10">
        <h2>Example 10: DOM Manipulation</h2>
        <div class="consoleOutput" id="output10"></div>
    </div>
    <div id="example11">
        <h2>Example 11: Events</h2>
        <div class="consoleOutput" id="output11"></div>
    </div>
    <div id="example12">
        <h2>Example 12: Try...Catch</h2>
        <div class="consoleOutput" id="output12"></div>
    </div>
    <div id="example13">
        <h2>Example 13: Strict Mode</h2>
        <div class="consoleOutput" id="output13"></div>
    </div>
    <div id="example14">
        <h2>Example 14: this Keyword</h2>
        <div class="consoleOutput" id="output14"></div>
    </div>
    <div id="example15">
        <h2>Example 15: Closures</h2>
        <div class="consoleOutput" id="output15"></div>
    </div>
    <div id="example16">
        <h2>Example 16: Timers (setTimeout)</h2>
        <div class="consoleOutput" id="output16"></div>
    </div>
    <div id="example17">
        <h2>Example 17: Timers (setInterval)</h2>
        <div class="consoleOutput" id="output17"></div>
    </div>
    <div id="example18">
        <h2>Example 18: Promises</h2>
        <div class="consoleOutput" id="output18"></div>
    </div>
    <div id="example19">
        <h2>Example 19: Async/Await</h2>
        <div class="consoleOutput" id="output19"></div>
    </div>
    <div id="example20">
        <h2>Example 20: Fetch API</h2>
        <div class="consoleOutput" id="output20"></div>
    </div>
    <div id="example21">
        <h2>Example 21: JSON</h2>
        <div class="consoleOutput" id="output21"></div>
    </div>
    <div id="example22">
        <h2>Example 22: Higher Order Functions (map)</h2>
        <div class="consoleOutput" id="output22"></div>
    </div>
    <div id="example23">
        <h2>Example 23: Higher Order Functions (filter)</h2>
        <div class="consoleOutput" id="output23"></div>
    </div>
    <div id="example24">
        <h2>Example 24: Higher Order Functions (reduce)</h2>
        <div class="consoleOutput" id="output24"></div>
    </div>
    <div id="example25">
        <h2>Example 25: Spread Operator</h2>
        <div class="consoleOutput" id="output25"></div>
    </div>
    <div id="example26">
        <h2>Example 26: Destructuring</h2>
        <div class="consoleOutput" id="output26"></div>
    </div>
    <div id="example27">
        <h2>Example 27: Classes</h2>
        <div class="consoleOutput" id="output27"></div>
    </div>
    <div id="example28">
        <h2>Example 28: Modules (ESM)</h2>
        <div class="consoleOutput" id="output28"></div>
    </div>
    <div id="example29">
        <h2>Example 29: Iterators and Generators</h2>
        <div class="consoleOutput" id="output29"></div>
    </div>
    <div id="example30">
        <h2>Example 30: Regular Expressions</h2>
        <div class="consoleOutput" id="output30"></div>
    </div>
    <div id="example31">
        <h2>Example 31: Math Object</h2>
        <div class="consoleOutput" id="output31"></div>
    </div>
    <div id="example32">
        <h2>Example 32: Date Object</h2>
        <div class="consoleOutput" id="output32"></div>
    </div>
    <div id="example33">
        <h2>Example 33: Template Literals</h2>
        <div class="consoleOutput" id="output33"></div>
    </div>
    <div id="example34">
        <h2>Example 34: Nullish Coalescing Operator</h2>
        <div class="consoleOutput" id="output34"></div>
    </div>
    <div id="example35">
        <h2>Example 35: Optional Chaining</h2>
        <div class="consoleOutput" id="output35"></div>
    </div>
    <div id="example36">
        <h2>Example 36: DocumentFragment</h2>
        <div class="consoleOutput" id="output36"></div>
    </div>
    <div id="example37">
        <h2>Example 37: classList</h2>
        <div class="consoleOutput" id="output37"></div>
    </div>
    <div id="example38">
        <h2>Example 38: Custom Events</h2>
        <div class="consoleOutput" id="output38"></div>
    </div>
    <div id="example39">
        <h2>Example 39: Proxy</h2>
        <div class="consoleOutput" id="output39"></div>
    </div>
    <div id="example40">
        <h2>Example 40: WeakMap</h2>
        <div class="consoleOutput" id="output40"></div>
    </div>
    <div id="example41">
        <h2>Example 41: Sets</h2>
        <div class="consoleOutput" id="output41"></div>
    </div>
    <div id="example42">
        <h2>Example 42: Maps</h2>
        <div class="consoleOutput" id="output42"></div>
    </div>
    <div id="example43">
        <h2>Example 43: requestAnimationFrame</h2>
        <div class="consoleOutput" id="output43"></div>
    </div>
    <div id="example44">
        <h2>Example 44: Web Workers</h2>
        <div class="consoleOutput" id="output44"></div>
    </div>
    <div id="example45">
        <h2>Example 45: Blob and URL</h2>
        <div class="consoleOutput" id="output45"></div>
    </div>
    <div id="example46">
        <h2>Example 46: Proxy</h2>
        <div class="consoleOutput" id="output46"></div>
    </div>
    <div id="example47">
        <h2>Example 47: Number formatting</h2>
        <div class="consoleOutput" id="output47"></div>
    </div>
    <div id="example48">
        <h2>Example 48: ResizeObserver</h2>
        <div class="consoleOutput" id="output48"></div>
    </div>
    <div id="example49">
        <h2>Example 49: Dynamic import</h2>
        <div class="consoleOutput" id="output49"></div>
    </div>
    <div id="example50">
        <h2>Example 50: Web Worker (Inline)</h2>
        <div class="consoleOutput" id="output50"></div>
    </div>
<script src="script.js"></script>
</body>
</html>
```
```javascript
        function appendToConsole(exampleNumber, text) {
            const outputDiv = document.getElementById(`output${exampleNumber}`);
            if (outputDiv) {
                outputDiv.textContent += text + "\n";
            } else {
                console.error(`Output div for example ${exampleNumber} not found.`);
            }
        }

        // 1. Variables and Data Types
        function example1() {
            let name = "John";
            const age = 30;
            var isAdult = true;
            let message = `Hello, my name is ${name} and I am ${age} years old.`;
            appendToConsole(1, "Example 1: Variables and Data Types");
            appendToConsole(1, message);
        }

        // 2. Arithmetic Operators
        function example2() {
            let x = 10;
            let y = 5;
            let sum = x + y;
            let difference = x - y;
            let product = x * y;
            let quotient = x / y;
            let remainder = x % y;
            appendToConsole(2, "Example 2: Arithmetic Operators");
            appendToConsole(2, `Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}`);
        }

        // 3. String Concatenation
        function example3() {
            let str1 = "Hello";
            let str2 = "World";
            let result = str1 + " " + str2;
            appendToConsole(3, "Example 3: String Concatenation");
            appendToConsole(3, result);
        }

        // 4. Conditional Statements
        function example4() {
            let age = 20;
            let message = (age >= 18) ? "Adult" : "Minor";
            appendToConsole(4, "Example 4: Conditional Statements");
            appendToConsole(4, message);
        }

        // 5. Arrays
        function example5() {
            let fruits = ["apple", "banana", "orange"];
            appendToConsole(5, "Example 5: Arrays");
            appendToConsole(5, fruits.join(", "));
        }

        // 6. For Loop
        function example6() {
            let sum = 0;
            for (let i = 1; i <= 5; i++) {
                sum += i;
            }
            appendToConsole(6, "Example 6: For Loop");
            appendToConsole(6, `Sum: ${sum}`);
        }

        // 7. While Loop
        function example7() {
            let i = 1;
            while (i <= 3) {
                appendToConsole(7, "Example 7: While Loop");
                appendToConsole(7, `Iteration: ${i}`);
                i++;
            }
        }

        // 8. Functions
        function example8() {
            function greet(name) {
                return `Hello, ${name}!`;
            }
            let greeting = greet("Alice");
            appendToConsole(8, "Example 8: Functions");
            appendToConsole(8, greeting);
        }

        // 9. Objects
        function example9() {
            let person = {
                firstName: "Bob",
                lastName: "Smith",
                age: 25
            };
            appendToConsole(9, "Example 9: Objects");
            appendToConsole(9, JSON.stringify(person));
        }

        // 10. DOM Manipulation
        function example10() {
            let heading = document.createElement("h2");
            heading.textContent = "Example 10: DOM Manipulation";
            document.body.appendChild(heading);
            let p = document.createElement("p");
            p.textContent = "Added element using JS!";
            document.body.appendChild(p);
             const outputDiv = document.getElementById("output10");
            outputDiv.appendChild(heading);
            outputDiv.appendChild(p);

        }

        // 11. Events
        function example11() {
            let button = document.createElement("button");
            button.textContent = "Click Me";
            button.onclick = function() {
                alert("Button Clicked!");
            };
            document.body.appendChild(button);
            const outputDiv = document.getElementById("output11");
            outputDiv.appendChild(button);

        }

        // 12. Try...Catch
        function example12() {
            try {
                throw new Error("Something went wrong!");
            } catch (error) {
                appendToConsole(12, "Example 12: Try...Catch");
                appendToConsole(12, error.message);
            }
        }

        // 13.  Strict Mode
        function example13() {
            "use strict";
            // x = 10; // Would cause an error in strict mode
            appendToConsole(13, "Example 13: Strict Mode");
            appendToConsole(13, "Demonstrates 'use strict' (check console for error in strict mode)");
        }

        // 14.  this Keyword
        function example14() {
            const obj = {
                name: "My Object",
                myFunction: function() {
                    appendToConsole(14, "Example 14: this Keyword");
                    appendToConsole(14, this.name); // 'this' refers to the object obj
                }
            };
            obj.myFunction();
        }

        // 15.  Closures
        function example15() {
            function outerFunction() {
                const outerVar = "Hello from outer function";
                function innerFunction() {
                    appendToConsole(15, "Example 15: Closures");
                    appendToConsole(15, outerVar); // innerFunction has access to outerVar
                }
                return innerFunction;
            }
            const myClosure = outerFunction();
            myClosure();
        }

        // 16.  Timers (setTimeout)
        function example16() {
            setTimeout(function() {
                appendToConsole(16, "Example 16: Timers (setTimeout)");
                appendToConsole(16, "Delayed message");
            }, 1000);
        }

        // 17. Timers (setInterval)
        function example17() {
            let count = 0;
            const intervalId = setInterval(function() {
                appendToConsole(17, "Example 17: Timers (setInterval)");
                appendToConsole(17, `Interval: ${count}`);
                count++;
                if (count >= 3) {
                    clearInterval(intervalId); // Stop the interval after 3 times
                }
            }, 500);
        }

        // 18.  Promises
        function example18() {
            const myPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Promise resolved!");
                    // reject("Promise rejected!"); //Uncomment to test reject
                }, 1500);
            });

            myPromise
                .then(result => {
                    appendToConsole(18, "Example 18: Promises");
                    appendToConsole(18, result);
                })
                .catch(error => {
                    appendToConsole(18, "Example 18: Promises");
                    appendToConsole(18, error);
                });
        }

        // 19.  Async/Await
        async function example19() {
            function simulateAsyncOperation() {
                return new Promise(resolve => {
                    setTimeout(() => resolve("Async operation complete!"), 2000);
                });
            }
            try {
                appendToConsole(19, "Example 19: Async/Await");
                const result = await simulateAsyncOperation();
                appendToConsole(19, result);
            } catch (error) {
                appendToConsole(19, "Example 19: Async/Await");
                appendToConsole(19, error);
            }
        }

        // 20.  Fetch API
        async function example20() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const data = await response.json();
                appendToConsole(20, "Example 20: Fetch API");
                appendToConsole(20, JSON.stringify(data));
            } catch (error) {
                appendToConsole(20, "Example 20: Fetch API");
                appendToConsole(20, "Error fetching data: " + error);
            }
        }

        // 21.  JSON
        function example21() {
            const myObject = { name: "John", age: 30 };
            const jsonString = JSON.stringify(myObject);
            const parsedObject = JSON.parse(jsonString);
            appendToConsole(21, "Example 21: JSON");
            appendToConsole(21, `Original Object: ${JSON.stringify(myObject)}`);
            appendToConsole(21, `JSON String: ${jsonString}`);
            appendToConsole(21, `Parsed Object: ${JSON.stringify(parsedObject)}`);
        }

        // 22.  Higher Order Functions (map)
        function example22() {
            const numbers = [1, 2, 3];
            const doubled = numbers.map(num => num * 2);
            appendToConsole(22, "Example 22: Higher Order Functions (map)");
            appendToConsole(22, `Original Numbers: ${numbers}`);
            appendToConsole(22, `Doubled Numbers: ${doubled}`);
        }

        // 23.  Higher Order Functions (filter)
        function example23() {
            const numbers = [1, 2, 3, 4, 5];
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            appendToConsole(23, "Example 23: Higher Order Functions (filter)");
            appendToConsole(23, `Original Numbers: ${numbers}`);
            appendToConsole(23, `Even Numbers: ${evenNumbers}`);
        }

        // 24. Higher Order Functions (reduce)
        function example24() {
            const numbers = [1, 2, 3, 4, 5];
            const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            appendToConsole(24, "Example 24: Higher Order Functions (reduce)");
            appendToConsole(24, `Original Numbers: ${numbers}`);
            appendToConsole(24, `Sum: ${sum}`);
        }

        // 25.  Spread Operator
        function example25() {
            const arr1 = [1, 2, 3];
            const arr2 = [...arr1, 4, 5];
            const obj1 = { a: 1, b: 2 };
            const obj2 = { ...obj1, c: 3 };
            appendToConsole(25, "Example 25: Spread Operator");
            appendToConsole(25, `Array 1: ${arr1}`);
            appendToConsole(25, `Array 2: ${arr2}`);
            appendToConsole(25, `Object 1: ${JSON.stringify(obj1)}`);
            appendToConsole(25, `Object 2: ${JSON.stringify(obj2)}`);
        }

        // 26.  Destructuring
        function example26() {
            const person = { firstName: "John", lastName: "Doe", age: 30 };
            const { firstName, lastName, age } = person;
            const numbers = [10, 20, 30];
            const [x, y, z] = numbers;
            appendToConsole(26, "Example 26: Destructuring");
            appendToConsole(26, `Name: ${firstName} ${lastName}, Age: ${age}`);
            appendToConsole(26, `Numbers: ${x}, ${y}, ${z}`);
        }

        // 27.  Classes
        function example27() {
            class Animal {
                constructor(name) {
                    this.name = name;
                }
                speak() {
                    return `${this.name} makes a sound.`;
                }
            }
            class Dog extends Animal {
                speak() {
                    return `${this.name} barks.`;
                }
            }
            const myDog = new Dog("Buddy");
            appendToConsole(27, "Example 27: Classes");
            appendToConsole(27, myDog.speak());
        }

        // 28.  Modules (ESM)
        function example28() {
          //  This example requires a server to run, and the script tag needs type="module"
          //  See example 49 for a combined example that can run in the browser.
          appendToConsole(28, "Example 28: Modules (ESM)");
          appendToConsole(28, "Check example 49 for a working example.");
        }

        // 29.  Iterators and Generators
        function example29() {
            function* countGenerator() {
                yield 1;
                yield 2;
                yield 3;
            }
            const generator = countGenerator();
            appendToConsole(29, "Example 29: Iterators and Generators");
            appendToConsole(29, generator.next().value);
            appendToConsole(29, generator.next().value);
            appendToConsole(29, generator.next().value);
        }

        // 30.  Regular Expressions
        function example30() {
            const text = "The quick brown fox jumps over the lazy dog.";
            const regex = /fox/;
            const found = regex.test(text);
            appendToConsole(30, "Example 30: Regular Expressions");
            appendToConsole(30, `Text: ${text}`);
            appendToConsole(30, `Regex: /fox/`);
            appendToConsole(30, `Found: ${found}`);
        }

        // 31.  Math Object
        function example31() {
            const randomNumber = Math.random();
            const roundedNumber = Math.round(3.6);
            const floorNumber = Math.floor(3.6);
            const ceilNumber = Math.ceil(3.2);
            appendToConsole(31, "Example 31: Math Object");
            appendToConsole(31, `Random Number: ${randomNumber}`);
            appendToConsole(31, `Rounded: ${roundedNumber}, Floor: ${floorNumber}, Ceil: ${ceilNumber}`);
        }

        // 32.  Date Object
        function example32() {
            const now = new Date();
            const specificDate = new Date(2024, 0, 20); // Year, Month (0-indexed), Day
            appendToConsole(32, "Example 32: Date Object");
            appendToConsole(32, `Current Date: ${now.toDateString()}`);
            appendToConsole(32, `Specific Date: ${specificDate.toDateString()}`);
        }

        // 33.  Template Literals
        function example33() {
            const name = "Alice";
            const greeting = `Hello, ${name}!`;
            appendToConsole(33, "Example 33: Template Literals");
            appendToConsole(33, greeting);
        }

        // 34.  Nullish Coalescing Operator
        function example34() {
            const value1 = null;
            const value2 = undefined;
            const value3 = "Hello";
            const result1 = value1 ?? "Default";
            const result2 = value2 ?? "Default";
            const result3 = value3 ?? "Default";
            appendToConsole(34, "Example 34: Nullish Coalescing Operator");
            appendToConsole(34, `Result 1: ${result1}, Result 2: ${result2}, Result 3: ${result3}`);
        }

        // 35.  Optional Chaining
        function example35() {
            const person = {
                name: "John",
                address: {
                    city: "New York"
                }
            };
            const city = person?.address?.city;
            const city2 = person?.address?.country; //Example of undefined
            appendToConsole(35, "Example 35: Optional Chaining");
            appendToConsole(35, `City: ${city}, City2: ${city2}`);
        }

        // 36.  DocumentFragment
        function example36() {
            const fragment = document.createDocumentFragment();
            const p1 = document.createElement("p");
            p1.textContent = "Paragraph 1";
            const p2 = document.createElement("p");
            p2.textContent = "Paragraph 2";
            fragment.appendChild(p1);
            fragment.appendChild(p2);
            document.body.appendChild(fragment); // Only one reflow
            appendToConsole(36, "Example 36: DocumentFragment");
            const outputDiv = document.getElementById("output36");
            outputDiv.appendChild(fragment);
            //The paragraphs are added.
        }

        // 37.  classList
        function example37() {
            let div = document.createElement("div");
            div.textContent="This is a div";
            div.classList.add("my-class");
            div.classList.add("another-class");
            div.classList.remove("my-class");
            const hasClass = div.classList.contains("another-class");
            document.body.appendChild(div);
            appendToConsole(37, "Example 37: classList");
            appendToConsole(37, `Has 'another-class': ${hasClass}`);
             const outputDiv = document.getElementById("output37");
             outputDiv.appendChild(div);
            //Check the added div in the elements tab to see the classes
        }

        // 38.  Custom Events
        function example38() {
            const myEvent = new CustomEvent("my-event", {
                detail: { message: "Hello from custom event!" }
            });
            document.addEventListener("my-event", (e) => {
                appendToConsole(38, "Example 38: Custom Events");
                appendToConsole(38, e.detail.message);
            });
            document.dispatchEvent(myEvent);
        }

        // 39.  Proxy
        function example39() {
            const target = {};
            const handler = {
                get: function(obj, prop) {
                    appendToConsole(39, `Getting property: ${prop}`);
                    return obj[prop];
                },
                set: function(obj, prop, value) {
                    appendToConsole(39, `Setting property: ${prop} to ${value}`);
                    obj[prop] = value;
                    return true;
                }
            };
            const proxy = new Proxy(target, handler);
            proxy.name = "John";
            appendToConsole(39, "Example 39: Proxy");
            appendToConsole(39, `Name: ${proxy.name}`);
        }

        // 40.  WeakMap
        function example40() {
            const wm = new WeakMap();
            let obj1 = {};
            let obj2 = {};
            wm.set(obj1, "value1");
            wm.set(obj2, "value2");
            appendToConsole(40, "Example 40: WeakMap");
            appendToConsole(40, `Value for obj1: ${wm.get(obj1)}`);
            appendToConsole(40, `Value for obj2: ${wm.get(obj2)}`);
            obj1 = null; // obj1 is garbage collected, and its entry is removed from wm
            appendToConsole(40, "obj1 set to null, check dev tools, the entry for obj1 should be gone.");

        }

        // 41.  Sets
        function example41() {
            const mySet = new Set();
            mySet.add(1);
            mySet.add(2);
            mySet.add(2); // Duplicate, will not be added
            mySet.add("hello");
            appendToConsole(41, "Example 41: Sets");
            appendToConsole(41, `Set size: ${mySet.size}`);
            appendToConsole(41, `Set has 2: ${mySet.has(2)}`);
            mySet.delete(2);
            appendToConsole(41, `Set after deleting 2: ${Array.from(mySet)}`);
        }

        // 42.  Maps
        function example42() {
            const myMap = new Map();
            myMap.set("name", "John");
            myMap.set("age", 30);
            myMap.set(1, "one");
            appendToConsole(42, "Example 42: Maps");
            appendToConsole(42, `Name: ${myMap.get("name")}`);
            appendToConsole(42, `Age: ${myMap.get("age")}`);
            appendToConsole(42, `Key 1: ${myMap.get(1)}`);
            appendToConsole(42, `Map size: ${myMap.size}`);
            myMap.delete("age");
            appendToConsole(42, `Map after deleting age: ${JSON.stringify(Array.from(myMap.entries()))}`);

        }

        // 43.  requestAnimationFrame
        function example43() {
            let start = null;
            let element = document.createElement('div');
            element.style.width = '100px';
            element.style.height = '100px';
            element.style.backgroundColor = 'blue';
            element.style.position = 'absolute';
            document.body.appendChild(element);
            function animate(now) {
                if (start === null) start = now;
                const progress = now - start;
                element.style.transform = `translateX(${progress / 10}px)`;
                if (progress < 2000) { // Continue animation for 2 seconds
                    requestAnimationFrame(animate);
                }
                else{
                  appendToConsole(43, "Example 43: requestAnimationFrame");
                }
            }
            requestAnimationFrame(animate);
             const outputDiv = document.getElementById("output43");
             outputDiv.appendChild(element);
        }

        // 44.  Web Workers
        function example44() {
          //  Web workers only work when served from a server, not from a local file.
          appendToConsole(44, "Example 44: Web Workers");
          appendToConsole(44, "Web Workers need to be run from a server. Check example 50 to see how to use it.");
        }

        // 45.  Blob and URL
        function example45() {
            const text = "Hello, Blob!";
            const blob = new Blob([text], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            appendToConsole(45, "Example 45: Blob and URL");
            appendToConsole(45, `Blob URL: ${url}`);
            //Use the URL in an iframe or img tag.
            const a = document.createElement('a');
            a.href = url;
            a.textContent = "Download Blob";
            a.download = "my-blob.txt";
            document.body.appendChild(a);
            const outputDiv = document.getElementById("output45");
            outputDiv.appendChild(a);

        }

        // 46.  Proxy
        function example46() {
            const target = {
                message1: "hello",
                message2: "everyone"
            };
            const handler = {
                get: function(target, prop, receiver) {
                    if (prop === 'message1') {
                        return 'greetings';
                    } else {
                        return Reflect.get(...arguments);
                    }
                },
                has: function(target, prop) {
                    return prop === 'message1' || prop === 'message2';
                }
            };
            const proxy = new Proxy(target, handler);
            appendToConsole(46, "Example 46: Proxy");
            appendToConsole(46, proxy.message1);
            appendToConsole(46, proxy.message2);
            appendToConsole(46, 'message1' in proxy);
            appendToConsole(46, 'message3' in proxy);

        }

        // 47.  Number formatting
        function example47() {
            const number = 123456.789;
            const formattedUS = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            const formattedDE = number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
            const percentage = 0.85;
            const formattedPercent = percentage.toLocaleString('en-US', { style: 'percent' });

            appendToConsole(47, "Example 47: Number formatting");
            appendToConsole(47, `US Currency: ${formattedUS}`);
            appendToConsole(47, `German Currency: ${formattedDE}`);
            appendToConsole(47, `Percentage: ${formattedPercent}`);

        }

        // 48.  ResizeObserver
        function example48() {
            const div = document.createElement('div');
            div.style.width = '200px';
            div.style.height = '100px';
            div.style.backgroundColor = 'orange';
            document.body.appendChild(div);

            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    appendToConsole(48, "Example 48: ResizeObserver");
                    appendToConsole(48, `Content box width: ${entry.contentBoxSize[0].inlineSize}`);
                    appendToConsole(48, `Content box height: ${entry.contentBoxSize[0].blockSize}`);
                }
            });

            resizeObserver.observe(div);
             const outputDiv = document.getElementById("output48");
             outputDiv.appendChild(div);
            //Try resizing the div in the elements tab of the browser.
        }

        // 49.  Dynamic import
        async function example49() {
            try {
                // Create a module.js file:
                // export default function add(a, b) {
                //   return a + b;
                // }
                const module = await import('./module.js'); //relative path
                const result = module.default(5, 10);
                appendToConsole(49, "Example 49: Dynamic import");
                appendToConsole(49, `Result of dynamic import: ${result}`);
            } catch (error) {
                appendToConsole(49, "Example 49: Dynamic import");
                appendToConsole(49, `Error: ${error}`);
            }
        }

      // 50. Web Worker Example (with inline worker)
      function example50() {
        // Create an inline worker script
        const workerCode = `
          self.onmessage = function(event) {
            let result = event.data * 2;
            self.postMessage(result);
          };
        `;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const workerUrl = URL.createObjectURL(blob);

        const myWorker = new Worker(workerUrl);

        myWorker.onmessage = function(event) {
          appendToConsole(50, "Example 50: Web Worker");
          appendToConsole(50, "Worker says: " + event.data); // Output from the worker
          URL.revokeObjectURL(workerUrl); // Clean up the URL
        };

        myWorker.postMessage(25); // Send data to the worker
      }

        // Run the examples (Add more as you create them)
        example1();
        example2();
        example3();
        example4();
        example5();
        example6();
        example7();
        example8();
        example9();
        example10();
        example11();
        example12();
        example13();
        example14();
        example15();
        example16();
        example17();
        example18();
        example19();
        example20();
        example21();
        example22();
        example23();
        example24();
        example25();
        example26();
        example27();
        example28();
        example29();
        example30();
        example31();
        example32();
        example33();
        example34();
        example35();
        example36();
        example37();
        example38();
        example39();
        example40();
        example41();
        example42();
        example43();
        example44();
        example45();
        example46();
        example47();
        example48();
        example49();
        example50();
```
