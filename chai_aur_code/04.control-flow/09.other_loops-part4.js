// As we check in 08.other_loops-part3.js if we store value of forEach in variable we will get undefined:

// Filter || Map || reduce: 

// A: Filter: 
// const myNum = [1,2,3,4,5,6];
// const newNums = myNum.filter( (nums) => {
//     return nums > 4
// })
// console.log(newNums)

// // Example 1: 
// const book = [
//   {"title": "The Hitchhiker's Guide to the Galaxy",  "genre": "Science Fiction", "published": 1979},

//   {"title": "Pride and Prejudice", "genre": "Classic", "published": 1813},

//   {"title": "To Kill a Mockingbird", "genre": "Southern Gothic","published": 1960}
// ]

// // const userBooks = book.filter((bk) => bk.genre === 'Classic') 

// const userBooks = book.filter((bk) => bk.published >= 1800 && bk.genre === 'Classic')

// console.log(userBooks) 


// B: Map
// const myNums = [1,2,3,4,5,6,7];
// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums)


// // Channing Method:
// const myNums = [1,2,3,4,5,6,7];
// const channing = myNums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num > 50)

// console.log(channing)



// C: Reduce

// // Example 1: 
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0; 
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial); // 10

/*
Let understand the above example: 

=> initialValue: we declare this to give some initial value to accumulator

=> currentValue: It refer to the current value inside the array

=> accumulator + currentValue, initialValue
    => 0 + 1, 0 => result will be 1
    => 1 + 2, 1 => result will be 3
    => 3 + 3, 3 => result will be 6
    => 6 + 4, 6 => result will be 10
*/

// // Reduce with normal fun: 
// const myNums = [1,2,3];
// const myTotal = myNums.reduce(function(acc, cur){
//     return acc + cur;
// }, 0)
// console.log(mytotal);

// Reallife example: 
const shoppingCart = [
    {itemName: 'JS cource', price: 2999},
    {itemName: 'Python cource', price: 3999},
    {itemName: 'Dev cource', price: 5999},
]

const myTotal =  shoppingCart.reduce( (acc, cur) => {
    return acc + cur.price;
}, 0)

console.log(`Grand Total ${myTotal}`);
