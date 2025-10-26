// Dates
const date =  new Date();
console.log(date); // 2025-09-21T18:16:03.005Z

// Convert into string:
console.log(date.toString()) // Sun Sep 21 2025 22:17:12 GMT+0400 (Gulf Standard Time)

// Other methods & output: 
console.log(date.getDate()) // 21
console.log(date.getDay()) // 0 => the days start in js with 0 which mean sunday
console.log(date.getFullYear()) // 25
console.log(date.toDateString()) // Sun Sep 21 2025
console.log(date.toISOString()) // 2025-09-21T18:19:32.777Z
console.log(date.toLocaleString()) // 9/21/2025, 10:20:36 PM

// Datatype of date: 
console.log(typeof date) // object

// Example: 
let createDate = new Date(2023, 0, 23);
console.log(createDate.toDateString()) // Mon Jan 23 2023
console.log(createDate.toLocaleDateString()) // 1/23/2023

let createDate1 = new Date("2023-01-14")
console.log(createDate1.toDateString()) // Sat Jan 14 2023
console.log(createDate1.toLocaleDateString()) // 1/14/2023

// Time Stamp: 
let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1758479317834 (javascript give this time in mili seconds we need to calculate to get the readable formate)

// Convert miliseconds into seconds:
// 1000 ms = 1s
console.log(Date.now()/1000) // 1758479504.693 (to round of the value we can use Math.floor())

// toLocalString(): custom
console.log(date.toLocaleString('default', {
    weekday: "long",
    month: "2-digit",
    year: "2-digit"
}));
