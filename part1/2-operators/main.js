// arithmetic operators 


console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5**5);
console.log(2%10);
console.log(20/2);

// asignmentOperators

let num=5;
num++
console.log(num);

// comparison

//  == === 

console.log("5" == 5); /* true js covert to a number like this string="5" => 5*/ 
console.log(false==0);/* 0 - 0 true */
console.log([] == ![])/* [] convert to a string or primitive type and this is false="" and empty array is true but this ![] is false  and final answer false == false :true* or 0 == 0 is true/;

console.log(null == undefined); /* true = js this is case not convert to a number or string */

console.log(null === undefined)/* false - datatype null is object but undefined is itself */;

console.log("5" === 5); /* false since datatype "5" is string  and data type 5 is number */

// ! /* false to true and true to false */

console.log(!false);/* true */
console.log(!true);/* false */

// !! convert to boolean

console.log(!!"hello");/* true */
console.log(Boolean("hello"));/* true */

// !== != not equal

console.log("5"!=5);/* false */
console.log("5"!== 5);/* true */

// example extract  number  3 

const arr=[1,2,3,4,5,6,7,8];
const final=arr.filter((item)=>item !== 3);
console.log(final); /* [1,2,4,5,6,7,8] */

// nullish

console.log(null ?? "hello"); /* hello -> left hand must be null or undefined, we have right answer, if in left hand we have false ,0,Nan,"" values we have left ansewer not right .nulish(??) when works we have in left hand just null or undefined */



// optional chaining

const data={};
console.log(data?.name?.address); /* clear error undefined */

// logical or and and 

// && just work true 
// || work if even we have false value in conditional  statment

const number=5;

if(number > 2 && number < 6) {
    console.log("this is true");
}else if(number > 8 || number > 2) {
    console.log("number greater than two");
}else {
    console.log("another number");
};


// in logical or  every falsy values in left hand, we have right hand answer.

console.log(false || "hello");/* hello */
console.log(false ?? "hello");/* false */

// but in nullish left hand must be null or undefined


// fast way conver string to a number => unary plus

console.log(+"5");/* number */
console.log(-"5");/* negative number */

// paseInt-parsefloat-tofixed - Number - String -toString
const num1=5;
const num2="5";


console.log(String(num1));
console.log(Number(num2));
console.log(num2.toString());

console.log(parseInt("5.33"));/* 5 a number */
console.log(parseFloat("5.33"));/* 5.33 keep it but datatype convert to number */
console.log(num1.toFixed());/* convert a number to sting */










