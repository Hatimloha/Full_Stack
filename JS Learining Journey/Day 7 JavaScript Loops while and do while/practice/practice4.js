// Find the factorial of a number using a while loop.
function factorial(n){
    if(n < 0){
        return "Factorial is not defined for negative numbers."
    }

    if(n === 0){
        return 1;
    }

    let result = 1;
    let i = n;

    while(i > 0){
        result *= i;
        i--;
    }
    return result

}

console.log(factorial(10))