const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const numbers = input[1].split('').map(Number);

console.log(numbers.reduce((a, c) => a + c));
