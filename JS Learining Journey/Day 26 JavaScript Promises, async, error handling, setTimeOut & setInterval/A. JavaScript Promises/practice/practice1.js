// Create a promise that resolves after 3 seconds with "Data received!" 

let promise = new Promise((resolves, reject) => {
    let success = true;
    setTimeout(() => {
        if(success){
            resolves("Task is completed successfully!")
        }
        else{
            reject("Task Failed")
        }
    }, 3000);
})

promise
    .then((message) => {
        console.log("Success:", message)
    })
    .catch((error) => {
        console.log("Failed:", error);
    });