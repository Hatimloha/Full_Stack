// Object destructuring ;
const info = {
    name: 'Hatim',
    age: 25,
    skills: 'FullStack'
}
// syntax: const {what value you want from obj} = name of the object
const {name} =  info;
console.log(name) // Hatim


// Custom name: 
const {skills: S} = info;
console.log(S) // FullStack

// JSON data syntax:
// 1:
/*
{
    'name': 'Rahul',
    'age': 30,
    'profession': 'IT'
}
*/

// 2. Array with multiple nested objects
/*
[
    {},
    {},
    {},
]
*/



