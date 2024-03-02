// EXAMPLE 1 - Convert Array to comma-separated String in JavaScript

const arr = ['bobby', 'hadz', 'com'];

// ✅ using String() constructor
const str = String(arr);
console.log(str); // 👉️ 'bobby,hadz,com'
console.log(typeof str); // 👉️ string

// // -------------------------------------------
// // ✅ Using toString() method

// const str2 = arr.toString();
// console.log(str2); // 👉️ 'bobby,hadz,com'
// console.log(typeof str2); // 👉️ string

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Array to String (with and without Commas) using `Array.join()`

// // ✅ Convert an array to a comma-separated string
// const arr = ['bobby', 'hadz', 'com'];

// const str = arr.join(',');
// console.log(str); // 👉️ 'one,two,three'

// const str2 = arr.join(', ');
// console.log(str2); // 👉️ "bobby, hadz, com"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Working around `undefined` and `null` values

// const arr = ['bobby', 'hadz', null];

// console.log(String(arr)); // 👉️ bobby,hadz,
// console.log(arr.join(',')); // 👉️ bobby,hadz,

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// // ✅ convert an array to a comma-separated string
// function arrayToCommaString(array) {
//   return array
//     .filter(element => {
//       return element !== null && element !== undefined;
//     })
//     .join(',');
// }

// const arr = [null, 'bobby', 'hadz', null, undefined, 'com'];

// const str = arrayToCommaString(arr);
// console.log(str); // 👉️ bobby,hadz,com

// // -------------------------------------------

// // EXAMPLE 5 - Convert an array to a string without commas using String.replaceAll()

// const arr = ['bo,bby', 'ha,dz', 'c,om'];

// const str = arr
//   .map(element => {
//     return element.replaceAll(',', '');
//   })
//   .join('');

// console.log(str); // 👉️ bobbyhadzcom
