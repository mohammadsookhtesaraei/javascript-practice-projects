
// variables for  keep data and manage

// var - function scope-Hoisting-redeclare-same name- if this define in global we have this in context or window object

// 2015 not use var

// es6 - const and  let 

// const - block scope-hoisting(temperal dead zone)-not redeclare- not same name -case sensetive-if define it in global, we have it in lexical envoirment -blockscript
// let block scope-hoisting(temperal dead zone)-reasign-not same name-case sensetive-if we define  it global, we have it in lexical envoirment-blockscript


// we can not define variable with a number but we can define with _ and $

// camelCase-pascalcase-snake_case

// default is camelCase.  for define class we use PascalCase


// data types in js -string-number-boolean-undefined-null-symbol-bigInt-object-array

// type of string = string
// type of number = number
// type of boolean = boolean
// type of undefined = undefined
// type of null = object 
// type of symbol = symbol 
// type of bigInt = biginteger
// type of array = object 
// type of object = object 
// type of function = function


// primitive types = string-number-boolean-undefined-null-symbol-bigInt
// reference types - array - object - function

// primitive types in  memory = stack memory
// reference types in memory = heap memory 

// primitive types inplace
// referance types referential or have an address for heap memory

// primitive types are immutable
// referance types are mutable



// practice  


const price1=10;
const price2=20;
const price3=30;

// balance
const balance=100;

// discount = 5%


const totalPrice=price1+price2+price3 * 2;
console.log(`totalPrice = ${totalPrice}$`);

const averagePrice=totalPrice / 4;
console.log(`averagePrice=${averagePrice}$`);

const finalPrice=totalPrice * 0.95;
console.log(`finalPrice=${finalPrice}$`);


const canBuy=balance >= finalPrice ? "Yes" : "No";
console.log(canBuy);

