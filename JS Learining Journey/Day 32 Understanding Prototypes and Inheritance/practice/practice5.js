// 🧩 5. Write a function to check if a property exists in the prototype or the object itself

// Function to check if a property exists in the object or its prototype chain
// It uses the 'in' operator, which checks both own properties and inherited properties.
function hasProperty(obj, prop) {
    return prop in obj;
}

// --- Example Usage ---

// 1. Define a prototype object
const proto = {
    protoProp: 'I am from the prototype',
};

// 2. Create an object that inherits from 'proto'
const myObject = Object.create(proto);

// 3. Add a direct property to 'myObject'
myObject.ownProp = 'I am an own property';

// Test cases
console.log(`Does myObject have 'ownProp'? ${hasProperty(myObject, 'ownProp')}`);
console.log(`Does myObject have 'protoProp'? ${hasProperty(myObject, 'protoProp')}`);
console.log(`Does myObject have 'toString'? ${hasProperty(myObject, 'toString')}`); // Inherited from Object.prototype
console.log(`Does myObject have 'nonExistentProp'? ${hasProperty(myObject, 'nonExistentProp')}`);