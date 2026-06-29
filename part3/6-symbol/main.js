

// symbol new datatype in es6 it is primitive type

// symbol always uniqe

const id1=Symbol("id");
const id2=Symbol("id");

console.log(id1===id2);/* false */
console.log(id1==id2);/* false */

// because symbol is uniqe


// how to share create global symbol

const id3=Symbol.for("app.id");
const id4=Symbol.for("app.id");

console.log(id3 === id4);/* true */



// example

const id=Symbol("id");

const user={
    name:"ali",
    [id]:123
};

console.log(user);
console.log(user[id]);