
const arr=["ali","sara","hasan","javad"];


// for

for (let i=0; i<arr.length; i++){
    console.log(arr[i].toUpperCase());
}

// 10
for (let i=10; i>=1; i--){
    console.log(i);
}



// while
let number=5;
let number2=5;



while(number<20){
    console.log(number);
    number++
}


// do while

do {
    console.log(number2);
    number2++
}while(number2<20);





// practice

const arr2=[1,1,1,2,2,2,3,3,4,4,5,5,6,7,8];
const final=[];

for (let i=0;i<arr2.length; i++){
   if(final.indexOf(arr2[i]) === - 1){
    final.push(arr2[i])
   }
};

console.log(final);

