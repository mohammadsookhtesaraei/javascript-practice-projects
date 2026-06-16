
// object  
// reference type 
// key and  value 

const data={
    name:"ali",
    age:25,
    city:"gorgan",
    address:{
        lng:123,
        zipcode:123654
    },
    siblings:["sara","amir"]
};


// how to get value 

console.log(data.name);
console.log(data["name"]);

// how to add a new item 

data.car="bmw";
console.log(data);

// how to delete item

delete data.car;
console.log(data);

// how to get all values;

console.log(Object.values(data));
// how to get all keys
console.log(Object.keys(data));


console.log(Object.entries(data));

// es6-destructure object 

// const  {name,age,city,address:{lng,zipcode},address}=data;

// spread operator

const newData={...data};

// rest operator 

const {name,...user}=data;
console.log(user);


// practice  get item 3 just body item


const arr=[
    {id:1,body:"aaaa"},
    {id:2,body:"bbbb"},
    {id:3,body:"cccc"},
];

const [first,second,third]=arr;

const {id,body}=third;
console.log(id);
console.log(body);


