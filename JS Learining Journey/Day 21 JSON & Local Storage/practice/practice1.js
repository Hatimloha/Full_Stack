// Create an object with your details and store it in localStorage.

let user = {
    name: "Ravi",
    age: 25,
    city: "Udaipur",
    pincode: 3454523
}

localStorage.setItem("userData", JSON.stringify(user));

let details = JSON.parse(localStorage.getItem("userData"));

console.log(details.name);
console.log(details.age);
console.log(details.city);
console.log(details.pincode);