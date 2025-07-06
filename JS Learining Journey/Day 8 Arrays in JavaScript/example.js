// Example 1:
let cities = ["Dubai", "Abu Dhabi", "Sharjah"];
console.log(cities.length)
console.log(cities[1])
cities.push("Ajman")
console.log("Push output:",cities)
cities.pop();
console.log("pop output: ",cities)


// Example 2:
let numbers = [1, 2, 3, 4, 5];

numbers.push(6);       // Add at end
numbers.unshift(0);    // Add at start
numbers.pop();         // Remove last
numbers.shift();       // Remove first

console.log(numbers);  // [1, 2, 3, 4]
console.log(numbers.includes(3));  // true
console.log(numbers.indexOf(4));   // 3
console.log(numbers.join("-"));    // "1-2-3-4"


