

// date 

const date=new Date();
console.log(date); 

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// js show the time and date from 1970

// get milisecond
const milisecond=date.getTime();
console.log(milisecond);

// 1 second is 1000 => ms

// index of month  and  day starts from zero 

// sunday-monday-tuesday-wednesday-thursday-friday-saturday
// 0-1-2-3-4-5-6

// january=0,
// feberuary=1,
// march=2
// april=3,
// may=4,
// june=5,
// july=6,
// agust=7,
// september=8,
// october=9,
// november=10,
// december=11

// year-month-day-hour-minute-second-milisecond
const date2=new Date(1992,11,27);
console.log(date2);


// if  we have date string month is normal starts one not zero 

// exaple

const date3=new Date("1992,12,27");




