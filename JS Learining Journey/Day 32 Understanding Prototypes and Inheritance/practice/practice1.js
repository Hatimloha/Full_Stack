// 🧩 1. Create a constructor function Car that has a method drive() via prototype.

function Car(name){
    this.name = name
};

Car.prototype.drive = function(){
    console.log(`I'm driving ${this.name}`);
};

const car = new Car("Toyota");
car.drive();