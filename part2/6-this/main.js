// this

globalThis.name="sara";

console.log(this.name);
console.log(this);



function sayName(){
    console.log(this.name);
};


sayName();/* sara */


const data={
    name:"ali",
    sayName:function(){
        console.log(this.name);
    }
};

data.sayName();/* ali */



const data2={
    name:"amir",
    sayName:()=>{
        console.log(this.name);
    }
};

data2.sayName();/* sara  */