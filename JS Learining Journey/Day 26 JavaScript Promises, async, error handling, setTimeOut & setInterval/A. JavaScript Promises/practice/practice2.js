// Create a function checkEven(number) that returns a promise — resolve if the number is even, reject if odd.

let promise = new Promise((res,rej) => {
    let n = 10;
    if(n % 2 == 0){
        res("This is an Even number",n);
    }else{
        rej("This is an Odd number:",n);
    }
})

promise
    .then((message) => {
        console.log(message)
    }).catch((error) => {
        console.log(error)
    })