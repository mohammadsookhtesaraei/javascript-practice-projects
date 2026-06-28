
// encapsulation
// persist data

// closure

function closure(){
    let sum=0;

    return function(){
        sum++;
        return sum
    }
};


const x=closure();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
