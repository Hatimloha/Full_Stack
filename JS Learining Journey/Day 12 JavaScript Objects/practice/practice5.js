// Loop through an object using for...in to print all keys and values.

var student = {
    name: "Hatim",
    class: 12,
   "roll_no": 24,
    stream: "science"
}

for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)){
        const element = student[key];
        console.log(`${key}:${element}`)
    }
}