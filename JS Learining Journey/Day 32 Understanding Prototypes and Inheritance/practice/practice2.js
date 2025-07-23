// 🧩 2. Create a Student object that inherits from a Person using Object.create().

const student = {
    greet(){
    console.log("Hi, Im a inherit method")
    }
};

const person = Object.create(student);
student.code = () => console.log("Im a own method")

person.greet()
person.code()