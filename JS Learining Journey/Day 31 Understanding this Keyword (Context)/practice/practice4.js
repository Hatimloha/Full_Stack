// Write a method that uses setTimeout() and use arrow function to keep this.

const person = {
    name: "Hatim",
    showName: function (){
        setTimeout(() => {
            console.log(this.name)
        }, 3000)
    }
}

person.showName()