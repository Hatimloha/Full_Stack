// create object and insert the value
const tinder = {} // {} black object
tinder.id = 122;
tinder.username = 'Hatim';
tinder.isLoggedIn = false;
// console.log(tinder)

// Nested Object 
const regularUser = {
    fullName: {
        userFullName: {
            firstName: 'Hatim',
            lastName: 'Lohawala'
        }
    }
}
// console.log(regularUser.fullName.userFullName) 
// Output: { firstName: 'Hatim', lastName: 'Lohawala' }

// console.log(regularUser.userFullName) 
// Output: undefine (If we try to directly access the nested data)

// Combine object:
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'}

// We will face the same issue like the array object inside object
// console.log({obj1, obj2}) 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// To avoid this:
const obj3 = Object.assign({}, obj1, obj2);
/*
{} : why we are using the empty object
=> To ensure that final result will come as object
=> This is the method mention in official documents
=> If we are not using the empty object for returning value it will take 1 object input and update with other object value in above example obj1
*/ 
// console.log(obj3) 
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Spreed functiona:
const obj4 = {...obj1, ...obj2};
console.log(obj4)

// When value come from Database
const users = [
    {
        name:'Hatim',
        age: 25
    },
    {
        name: 'jafar',
        age: 26
    },
    {
        name: 'Jumana',
        age: 17
    }
];

// Data is coming in the form of array so we can access through index and require field
console.log(users[1].name)

// Keys & values
console.log(Object.keys(tinder))
// [ 'id', 'username', 'isLoggedIn' ] => Value will come in the form of array so we can use it on multiple place
console.log(Object.values(tinder));

// Other methods: 
// length:
console.log(Object.keys(tinder).length) 
// length is property of array and strings so when we use the keys method object value convert into array then we can use the length method.

// Entries:
console.log(Object.entries(tinder))
// [ [ 'id', 122 ], [ 'username', 'Hatim' ], [ 'isLoggedIn', false ] ]

// hasOwnProperty => use to check value is present or not (true & false)
console.log(tinder.hasOwnProperty('isLoggedIn')) // true
