// Add a method to student object that checks if the average mark is above 75 and returns "Pass" or "Fail".

let student = {
    name: "Hatim",
    marks: [70,80,90],
    average(){
        let sum = 0;
        for(let mark of this.marks){
            sum += mark;
        }
        sum = sum / this.marks.length
        
        if(sum >= 75){
            console.log(`${this.name}, you are Pass`)
        }
        else{
            console.log(`${this.name}, you are Fail!`)
        }
    }
}

student.average()