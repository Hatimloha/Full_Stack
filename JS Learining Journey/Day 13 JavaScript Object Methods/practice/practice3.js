// Create an object circle with radius and a method to calculate area (πr²).
let circle = {
    radius: 5,
    area_of_circle(){
        let pi = 3.14;
        let area = pi * (this.radius * this.radius);
        console.log(area)
    }
};
circle.area_of_circle()