// 🧩 3. Modify Dog to include a method info() that prints name and breed.

function Dog(name, bread){
    this.name = name;
    this.bread = bread;
}

Dog.prototype.info = function(){
    console.log(`The ${this.name} are under ${this.bread} bread`);
};

const dog = new Dog("buddy", "Labrador");

dog.info()