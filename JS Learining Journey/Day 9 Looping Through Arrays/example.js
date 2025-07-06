// Example: 
let numbers = [2,4,6,8,10];

// Using for loop
for(let i = 0; i < numbers.length; i++){
    console.log("Index:", i,"value:",numbers[i])
}

// Using for...of
for(let num in numbers){
    console.log("Value:",num)
}

// Using forEach
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});