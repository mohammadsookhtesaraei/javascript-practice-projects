
// math

// round
const round=9.35;
console.log(Math.round(round));/* 9 */

// random
const number=100;
console.log(Math.random()*number);

// floor

const number2=5.99;
console.log(Math.floor(number2));/* 5 */

// ceil 
const number3=5.23;
console.log(Math.ceil(number3));/* 6 */

// pow
console.log(Math.pow(2,2));/* 4 */

// min
console.log(Math.min(1,2,3,4,5));/* 1 */

// max
console.log(Math.max(1,2,3,4,5));/* 1 */

// sign 
console.log(Math.sign(243));/* 1 */
console.log(Math.sign(-243));/* -1 */


// practice

// get random item from array

const arr=["sara","javad","ali"];

const random=Math.floor(Math.random()*3);

const final=arr[random];
console.log(final);

