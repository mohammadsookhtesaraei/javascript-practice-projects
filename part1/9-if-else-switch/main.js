// if-else statement

const number = 5;
if (number > 5) {
  console.log("number greater than five");
} else if (number > 4) {
  console.log("number greater than four");
} else {
  console.log("another number");
}

// Ternary Operator
number > 5 ? console.log("yes") : console.log("no");

const arr = ["paper", "scissors", "rock"];
const random = arr[Math.floor(Math.random() * arr.length)];

switch (random) {
  case "rock":
    console.log("rock");
    break;
  case "paper":
    console.log("paper");
    break;
  case "scissors":
    console.log("scissors");
    break;

  default:
    console.log("try");
}
