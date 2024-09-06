const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = Number(
  input[0]
    .split('')
    .sort((a, b) => b - a)
    .join(''),
);

console.log(numbers);
