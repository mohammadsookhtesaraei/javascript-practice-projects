

// single selectors 

// getElementById
// querySelector


document.body.style.margin="0";
document.body.style.padding="0";

// id 

const header=document.getElementById("header");
console.log(header);

header.style.padding="20px";
header.style.backgroundColor="purple";


// class

const paragraph=document.querySelector(".paragraph");
paragraph.style.color="red";

// query with id

const heading=document.querySelector("#heading");

heading.style.color="blue"


// select with tag
const button=document.querySelector("button");

// select with attribute

const input=document.querySelector('[type="text"]');
console.log(input);

// select child in parent

const btn=document.querySelector(".box Button");
console.log(btn);

// select child >

const ptext=document.querySelector(".box1 > p");
console.log(ptext);

// final 
const cardactive=document.querySelector(".card.active");

