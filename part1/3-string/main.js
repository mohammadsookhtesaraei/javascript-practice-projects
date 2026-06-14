

// string

const str="hello world";
// string index strat from zero
// string length start from one

console.log(str.length);/* 11 */
// str index = 10

console.log(str.hasOwnProperty("length"));
console.log(str.__proto__);
console.log(new String("mohammad"));

console.log(str[0]);/* h */

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.indexOf("e"));
console.log(str.charAt(0));

console.log(str.substring(0,4));
console.log(str.slice(0,4));

console.log(str.split(""));

console.log(str.concat(" world"));

console.log(str.trim());
console.log(str.padStart(12,"0"));
console.log(str.replace("h","m"));
console.log(str.replaceAll("l","o"));

console.log(str.match("hello"));
console.log(str.includes("h"));
console.log(str.lastIndexOf("o"));

// es6 -template literals

// practice

const userName="mohammad";
const index=userName.indexOf("m");/* 1 */
const firstLetter=userName[index];/* m */
const upperCase=firstLetter.toUpperCase();/* M */

const newUserName=userName.replace(firstLetter,upperCase);/* Mohammad */


const sentence=`Hello my name is ${newUserName}.`;
console.log(sentence);/* Hello my name is Mohammad. */
