const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const time = input[0].split(' ');
const plus = parseInt(input[1]);

let hour = parseInt(time[0]) * 60;
let minute = parseInt(time[1]);

const endTime = (hour + minute + plus) % 1440;

hour = parseInt(endTime / 60);
minute = endTime % 60;

console.log(hour, minute);
