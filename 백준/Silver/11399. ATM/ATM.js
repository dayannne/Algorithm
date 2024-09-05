const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, times] = input;
times = times
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let currSum = 0;
let minSum = 0;

for (const time of times) {
  currSum += time;
  minSum += currSum;
}

console.log(minSum);
