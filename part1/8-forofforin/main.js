
// for of  =arr

// for in = object


const arr=["ali","sara","hasan"];

// simple loop in array

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
};


for(let i of arr){
    console.log(i);
};

// in
const data={
    name:"ali",
    age:25,
    city:"gorgan"
};


for (let i in data){
    // key
    console.log(i);
    // value
    console.log(data[i]);
};



const keys=Object.keys(data);
const values=Object.values(data)

for(let i=0; i<keys.length; i++){
    console.log(keys[i]);
};

for(let i=0; i<values.length; i++){
    console.log(values[i]);
};


const state=Object.entries(data);

state.forEach(([keys,value])=>console.log(`${keys}:${value}`))

