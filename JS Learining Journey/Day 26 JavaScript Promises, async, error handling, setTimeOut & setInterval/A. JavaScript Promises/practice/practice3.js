let messagePromise = new Promise((resolve, reject) => {
    resolve("hello");
});

messagePromise
    .then((msg) => {
        return msg.toUpperCase();  // "HELLO"
    })
    .then((msg) => {
        return msg + "!";          // "HELLO!"
    })
    .then((msg) => {
        console.log("Final Message:", msg);  // Output: Final Message: HELLO!
    })
    .catch((err) => {
        console.log("Error:", err);
    });
