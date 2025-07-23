// Use .bind() to fix this in a standalone function.


function greet(){
    console.log(`Hi, ${this.name}`)
}

const user = {name: "Hatim"};

const greetUser = greet.bind(user);

greetUser()