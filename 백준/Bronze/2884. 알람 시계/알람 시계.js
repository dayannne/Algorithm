const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const line = input[0].split(' ');

let hour = parseInt(line[0]) * 60;
let minute = parseInt(line[1]);
const time =
  hour + minute - 45 < 0 ? 1440 + (hour + minute - 45) : hour + minute - 45;

hour = parseInt(time / 60);
minute = time % 60;

console.log(hour, minute);