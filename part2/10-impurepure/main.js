

// pure function


function sayName(name){
    console.log(name);
};


sayName("ali");
sayName("ali");
sayName("ali");

// impure function has sideEffect

let sum=0;


function count(){
    sum++;
    console.log(sum);
};

count();
count();
count();

