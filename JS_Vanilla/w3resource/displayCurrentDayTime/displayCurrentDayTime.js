const date = new Date();
weekdaysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hour > 12) {
  hour = hour - 12 + " PM";
} else if (hour === 12) {
  hour = "12 PM";
} else {
  hour = hour + " AM";
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}

console.log(`Today is: ${weekdaysList[day]}.`);
console.log(`Current time is: ${hour} : ${minutes} : ${seconds}`);
