let promise = new Promise((resolve, reject) => {
    let complete = false;
    
    if(complete){
        resolve("Task is completed")
    }else{
        reject("Task Failed!!")
    }
});

promise
    .then((message) => {
        console.log("success",message);
    })
    .catch((error) => {
        console.log("Error:", error)
    });