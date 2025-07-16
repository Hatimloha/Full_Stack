// Clear the entire localStorage.
// Retrieve the object and log your city.

let user = {
    name: "Ravi",
    age: 25,
    city: "Udaipur",
    pincode: 3454523
}

localStorage.setItem("userData", JSON.stringify(user));

localStorage.clear()


// Uncomment below code and run to check the error 
// let details = JSON.parse(localStorage.getItem("userData"));

// console.log(details.city);
