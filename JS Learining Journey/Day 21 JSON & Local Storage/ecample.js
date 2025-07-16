// Save your info to localStorage

let student = {
  name: "Hatim",
  course: "JavaScript",
  batch: "Day 21"
};

localStorage.setItem("studentData", JSON.stringify(student));

let data = JSON.parse(localStorage.getItem("studentData"));

console.log(data.name); //Hatim
