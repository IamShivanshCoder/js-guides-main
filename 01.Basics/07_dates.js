//Date is a object

// const time = new Date();

// console.log(time.toDateString());
// // Fri Dec 19 2025

// console.log(time.toLocaleString());
// // 12/19/2025, 1:11:02 PM

// console.log(time);
// // Fri Dec 19 2025 13:12:42 GMT+0530 (India Standard Time)

// console.log(time.toJSON());
// // 2025-12-19T07:42:42.845Z

// console.log(time.toString());
// // Fri Dec 19 2025 13:14:51 GMT+0530 (India Standard Time)

// console.log(time.toISOString());
// // 2025-12-19T07:44:51.916Z

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();
// newDate.getDate()
// newDate.getUTCDay()
newDate.toLocaleString("default", {
  weekday: "long",
});
