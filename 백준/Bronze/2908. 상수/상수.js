const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[0].split(' ');
numbers = numbers.map((n) => Number(n.split('').reverse().join('')));
console.log(Math.max(...numbers));
