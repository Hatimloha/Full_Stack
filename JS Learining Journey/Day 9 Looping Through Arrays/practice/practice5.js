// Print only the even numbers in an array using for...of.

let arr = [7,60,5,31,86,98,76,86];

for (const array of arr) {
    if(array % 2 == 0){
        console.log(array)
    }
}