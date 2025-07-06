    // Count how many times a specific value appears in an array.

    let arr = [1,2,2,2,2,3,4,5,6,5,3];
    let target = 2;
    let count = 0

    for(let i = 0;  i < arr.length; i++){
            if(arr[i] === target){
                count++
            }
    }
console.log(count)