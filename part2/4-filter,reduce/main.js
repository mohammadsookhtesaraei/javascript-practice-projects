

// filter


const users = [
    { id: 1, name: "Ali", age: 25 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Reza", age: 30 },
    { id: 4, name: "Maryam", age: 27 },
    { id: 5, name: "Hossein", age: 35 },
    { id: 6, name: "Narges", age: 24 },
    { id: 7, name: "Amir", age: 29 },
    { id: 8, name: "Fatemeh", age: 26 },
    { id: 9, name: "Mohammad", age: 31 },
    { id: 10, name: "Zahra", age: 23 },
    { id: 11, name: "Mahdi", age: 28 }
];


const under30=users.filter((item)=>item.age <= 30);
console.log(under30);


// reduce
const totalage=users.reduce((total,item)=>total + item.age,0);
console.log(totalage);