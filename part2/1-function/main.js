
// 1-function-declaration

function sayName(){
    console.log("hello");
};

sayName();


function sum(num){
    console.log(num * 2);
};

sum(5);


//2- return

function sum2(num,num2=2){
    return num + num2
};

const x=sum2(2);
console.log(x);


// 3-expression function 

const data=function(num){
    console.log(num);
};

data(5);


// 4-arrow function 

const y=(a,b)=>a + b;
console.log(y(5,5));

const state=(a,b,c,d)=>{
    const result=a+b+c+d;
    return result
};


console.log(state(5,2,3,1));

// 5-IIFE INVOKEDFUNCTION


(function sum(){
    console.log("hello");
})();

(function num(a){
    console.log(a);
})(5);

// 6-anonymous function they dont have a name

// function(){}


// 7-callBackFunction

function userData(name,callBack){
    callBack(name);
};

const text=(name)=>console.log(`my name is ${name}`);

userData("ali",text);


// practice




function countLetter(str,letter){
let sum=0;

for(let i=0; i<str.length;i++){
    if(str[i]=== letter) sum++
}

return sum;
};


console.log(countLetter("mohammad","m"));







