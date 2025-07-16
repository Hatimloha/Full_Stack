// Spreed
let arr1 = [1,2];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4]

// Rest
function multiply(multiplier, ...nums){
    return nums.map(num => num * multiplier)
}
console.log(multiply(2,1,2,3)) // [2,4,6]

// Destructuring
let car = {brand: "Toyota", model: "fortuner"};
let {brand, model} = car;
console.log(brand); // Toyota

