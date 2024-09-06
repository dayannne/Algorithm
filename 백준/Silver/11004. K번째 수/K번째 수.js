const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const K = Number(input[0].split(' ')[1]);

const sorted_numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(sorted_numbers[K - 1]);
