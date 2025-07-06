// Find the maximum number in an array.
let arr = [1,23,45,7,3,34,5,67,55];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)