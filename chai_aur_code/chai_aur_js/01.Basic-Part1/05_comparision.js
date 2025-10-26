// Basic Comparision:
console.log(2 > 1); //true
console.log(3 >= 1); //Imp: true 
console.log(2 < 1); // false
console.log(2 == 1); //false
console.log(2 != 1); //true

// Comparison of string & number:
console.log('2' > 1) //true
console.log('02' > 1) //true

// Comparision fo null
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* Note: JS comparision operator >,== || >=, <= works differently 
- in case of >, == : JS is not converting null value into integer;
- in case of >=, <= : JS is converting null value into integer as 0;
*/


// Comparison in case of undefine: false in all case:
console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined <= 0) //false


// Strict Check: ===
// In this case while comparing the data it will check the datatype it is different it will always give fasle
// Example: 
console.log('2' === 2); //false 
console.log('2' == 2); //true 
