// for each

const arr = ["mohammad", "email", "age"];

arr.forEach((item) => {
  console.log(item.toUpperCase());
});

// map

const toUpperCaseData = arr.map((item) => item.toUpperCase());
console.log(toUpperCaseData);

// practice


// add title for items
const data = [
  { id: 1, name: "ali", gender: "m" },
  { id: 2, name: "sara", gender: "f" },
];

const final = data.map((item) => {
  let title = "";
  if (item.gender === "m") {
    title = "mr";
  } else if (item.gender === "f") {
    title = "miss";
  } else {
    title = "other";
  }

  item.title = `${title}`;

  return item;
});


console.log(final);