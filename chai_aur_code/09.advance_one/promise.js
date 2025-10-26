// // Example 1:
// const promiseOne = new Promise(function(res, rej){
//     // Do a sync task 
//     // DB calls, cryptography, network
    
//     setTimeout(function(){
//         console.log('Async task is completed');
//         res() // Note: After declaring this it will connect to the .then otherwise it will not work.
//     })
// })

// promiseOne.then(function(){
//     console.log("Promise Completed")
// })


// // Example 2:
// new Promise(function(res, rej){
//     setTimeout(() => {
//         console.log('Async Task two')
//         res()
//     }, 1000);
// }).then(function(){
//     console.log('Async 2 resolved')
// })


// // Example 3: 
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'Chai', email: 'chai@example.com'})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// // Example 4: Chaining
// const promiseFour = new Promise(function(res, rej){
//     setTimeout(function(){
//         let error = false; // Change the status: true
//         if(!error){
//             res({username: 'hatim', password: '123'})
//         }else{
//             rej('Error: Something went wrong')
//         }
//     }, 2000)
// }).then(function(user){
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log('The promise is either resolve or rejected')
// })
// // Note: We cant store .then in the variable it will give error


// // Example 5:
// const promiseFive = new Promise(function(res, rej){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             res({username: 'hatim', password: '123'})
//         }else{
//             rej('Error: JS went wrong')
//         }
//     }, 1000);
// })

// // This will make issue in reject condition 
// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response)
// }
// consumePromiseFive()

// // Correct Way to do that task using async functiom
// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// consumePromiseFive()



// // Example 6: 
// async function getAllUser() {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users');
//    /* 
//    console.log(response) => this will work but in below line if i remove the await it give this error: "Promise { <pending> }" 

//    Why ? 
//    => To convert the data into other datatype also take time so we need await.
//    */ 
//    const data = await response.json();
//    console.log(data)
// }
// getAllUser()

// // Example 6 - Part 2: using .then & .catch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=> {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })