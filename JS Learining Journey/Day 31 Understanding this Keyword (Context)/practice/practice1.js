// Create an object with a method that logs its own name using this.

const person = {
    name: "Hatim",
    showName: function (){
        console.log(this.name)
    }
}

person.showName()