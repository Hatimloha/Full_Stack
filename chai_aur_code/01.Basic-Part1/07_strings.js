let name = 'Hatim';
let repoCount = 20;
// Concat of strings: 
console.log(name + repoCount) // Hatim20

// Interpolation: 
console.log(`Hello my name is ${name} & I have more then ${repoCount} in GitHub`);

// How to declare the string:
const gameName = new String('Hatim')
// Note: Use above declared string in browser you will be able to see the proto (property) type method and key pair value & function which can be use by with the strings

// Example: 
console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // HATIM
// Check the position fo character
console.log(gameName.charAt(2)); // t
// check the positon of character by char:
console.log(gameName.indexOf('t'))
// Substring:
const newString = gameName.substring(0,4);
console.log(newString); // Hati
// Note: In subString negative value doesn't count

// Slice:
const anotherStr = gameName.slice(-5, 0)
console.log(anotherStr) // Hati 

// Trim(): when you want to delete whitespace
const name1 = '      Hatim     '
console.log(name1) // |      Hatim        |
console.log(name1.trim()) // Hatim

// Replace: (search, replace)
const url = 'https://github.com/hatim%20loha';
console.log(url.replace('%20',''));

// Includes:
console.log(url.includes('hatim')) //true

// Split:
const checkSplit = 'hatim-ali-lohawala'
console.log(checkSplit.split('')) // seprate as signle character 
console.log(checkSplit.split(' ')) // separate as words
console.log(checkSplit.split('-')) // seprate as the bases of dash 
