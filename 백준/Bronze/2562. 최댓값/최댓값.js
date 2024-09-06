const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input.map(Number);
const maxNum = Math.max(...numbers);

console.log(maxNum);
console.log(numbers.indexOf(maxNum) + 1);
