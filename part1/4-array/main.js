
const arr=["ali","sara","hasan"];
const arr2=[25,26,27];

console.log(typeof arr);/* object */

// array is reference type and mutable

console.log(arr.length);

// push add item from last
arr.push("mahsa");
console.log(arr);
// unshift add item from first
arr.unshift("jaber");
console.log(arr);

// pop remove item from last

arr.pop();

// shift remove item from first
arr.shift();

console.log(arr);
console.log(arr.slice(0,2));
console.log(arr.concat("hello"));
console.log(arr.indexOf("ali"));
console.log(arr.includes("ali"));
console.log(arr.join(""));
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.flat());
arr[0]="sahar";
console.log(arr);

// spread operator in array 

const final=[...arr,...arr2];
console.log(final);

// destructure in array 

const [first,second,third]=arr;
console.log(first,second,third);




// practice  rotate array, just last item must be rotate


function rotateArray(data,reverse){
    if(reverse){
     data.unshift(data.pop());
     return data
    }else {
        data.push(data.shift());
        return data
    }
};

console.log(rotateArray([1,2,3],true));
console.log(rotateArray([1,2,3]));


