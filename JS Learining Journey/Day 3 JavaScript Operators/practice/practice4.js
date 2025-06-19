// Write logic to print "Discount Available" if the customer is a student or senior.
// let user = prompt("Enter your name")

let user = "Ramesh"
let student = "hatim"
let senior = "jafar"

if(user === student){
    console.log("Student: You have 10% discount")
}
else if(user === senior){
    console.log("Senior: You have 20% discount")
}
else{
    console.log("Other: You have 5% discount")
}