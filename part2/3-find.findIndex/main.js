

// find 

const arr=["ali","sara","javad"];

const data=arr.find((item)=> item === "ali");
console.log(data);

// findIndex

const data2=arr.findIndex((item)=>item);
console.log(data2);

const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" }
];


const index=users.findIndex((item)=>item.id === 2);

if(index !== -1){
    users[index].name="maryam"
};

console.log(users);