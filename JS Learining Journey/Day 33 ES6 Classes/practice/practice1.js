// 1. Create a Car class with brand and method drive().

class Car{
    constructor(brand){
        this.brand = brand;
    };
    drive(){
        console.log(`I have ${this.brand} Camry`)
    }
};


const car = new Car("Toyota")
car.drive()   