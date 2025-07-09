// Exercise with Code:
const car = {
    brand: "toyota",
    year: 2020,
    getDetails(){
        return `Brand: $(this.brand), year: ${this.year}`
    }
};

console.log(car.getDetails());  // Output: Brand: Toyota, Year: 2020