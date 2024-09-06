const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);
let answer = '';

for (let i = 1; i <= T; i++) {
  const numbers = input[i].split(' ');
  answer += `${Number(numbers[0]) + Number(numbers[1])}\n`;
}

console.log(answer);
