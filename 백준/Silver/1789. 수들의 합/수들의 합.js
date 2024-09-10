const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let curr = 0;
let sum = 0;
while (sum <= N) {
  curr++;
  sum += curr;
}
console.log(curr - 1);

