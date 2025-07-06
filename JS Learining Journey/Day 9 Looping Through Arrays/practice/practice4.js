// Count how many elements in an array are greater than 50.

let arr = [10,60,50,64,86,98,76,86];
let greater = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 50){
        greater.push(arr[i])
    }
}
console.log(greater)