const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sorted_numbers = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(sorted_numbers.join(' '));