

// Set like array but just we have uniq data with set

const data=new Set();

data.add("ali");
data.add("sara");
data.add("amir");

console.log(data);
// has
console.log(data.has("ali"));

// size
console.log(data.size);

data.delete("sara");
console.log(data);