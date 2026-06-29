
// Map is a new dataStructure

const myMap=new Map();

myMap.set("name","ali");
myMap.set("age",25);
myMap.set("siblings",["sara","ali"]);
myMap.set("address",{city:"gorgan"});

console.log(myMap);

// get
console.log(myMap.get("name"));
// has
console.log(myMap.has("name"));
// size
console.log(myMap.size);
// delete
myMap.delete("name");
console.log(myMap);

// clear 
myMap.clear();

console.log(myMap);


const data=new Map();

data.set("name","sara");
data.set("age",25);
data.set("city","gorgan");

// get keys
const result=data.keys();
console.log(result);

// MapIterator

for (key of result){
    console.log(key);/* key */
    console.log(data.get(key));/* values */
}

data.forEach((key,value)=>{
    console.log(key);
    console.log(value);
});

const enteries=data.entries();
console.log(enteries);
