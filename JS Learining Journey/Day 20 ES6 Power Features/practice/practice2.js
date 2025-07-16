// Use the rest parameter in a function to accept any number of names and log each.

function printNames(...names){
    names.forEach((name, index) => {
        console.log(`${index + 1}: ${name}`)
    })
}

printNames("Hatim", "Jafar", "Ali", "Ravi");
