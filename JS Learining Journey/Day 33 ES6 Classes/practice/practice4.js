// 4. Build a Shape base class and extend it with Circle and Rectangle.

class Shape {
    constructor() {
        // base class doesn't need to store specific dimensions
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        console.log("Area of circle:", 3.14 * this.radius * this.radius);
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        console.log(`Area of rectangle: ${this.length * this.width}`);
    }
}

// Create instances
const myCircle = new Circle(8);
const myRectangle = new Rectangle(5, 10);

// Call area methods
myCircle.area();       // Area of circle: 200.96
myRectangle.area();    // Area of rectangle: 50
