let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = input[1];

const b_1 = parseInt(b[2]);
const b_2 = parseInt(b[1]);
const b_3 = parseInt(b[0]);

console.log(a * b_1);
console.log(a * b_2);
console.log(a * b_3);
console.log(a * parseInt(b));