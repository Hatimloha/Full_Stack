// Reverse a number using a while loop (e.g., input: 123 → output: 321).

let n = 123;
let str = String(n)
while(str > 0){
    console.log(str.split("").reverse().join(""));
    break;
}