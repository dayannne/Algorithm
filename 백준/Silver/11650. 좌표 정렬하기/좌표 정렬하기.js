const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const numbers = input
  .slice(1, N + 1)
  .map((s) => s.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .map((arr) => arr.join(' '))
  .join(`\n`);

console.log(numbers);