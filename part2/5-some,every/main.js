

const arr=["ali","sara",25];

const data=arr.some((item)=> typeof item === "string");
console.log(data);/* true */
const data2=arr.every((item)=>typeof item === "string");
console.log(data2); /* false */