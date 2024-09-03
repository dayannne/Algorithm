const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const sorted_numbers = input
  .slice(1, length + 1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(sorted_numbers.join('\n'));
