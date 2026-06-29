

// settimeout comes from window object of browser


const user=setTimeout(()=>{
console.log("hello");
},2000);

// after 2 second log hello

clearTimeout(user);

// setInterval 

let count = 1;

const interval = setInterval(() => {
  console.log(count);

  count++;

  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);