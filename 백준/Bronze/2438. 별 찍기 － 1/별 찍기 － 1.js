const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const number = Number(input[0]);
let asterisk = '';

for (let i = 1; i <= number; i++) {
  asterisk += '*';
  console.log(asterisk);
}