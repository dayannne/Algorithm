const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split(' ');

console.log(Math.min(...numbers), Math.max(...numbers));