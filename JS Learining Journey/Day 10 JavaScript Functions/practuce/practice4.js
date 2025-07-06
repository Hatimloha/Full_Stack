// A function findMax(arr) that returns the maximum number from an array.

function findMax(arr){
    return Math.max(...arr); // spread the array into individual values
}
console.log(findMax([2,3,4,67,88,99,3,4,67,3]));