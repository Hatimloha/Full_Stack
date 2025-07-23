//  2. Create a Person class and extend it into Teacher, which has a teach() method

class Person{
    constructor(subject){
        this.subject = subject;
    };
};

class Teacher extends Person{
    constructor(subject){
        super(subject);
    }

    teach(){
        console.log(`Me teach ${this.subject}`)
    }
}

const teacher = new Teacher("Math");
teacher.teach();