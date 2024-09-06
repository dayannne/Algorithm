const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const expression = input[0].split('-');
let answer = 0;
for (let i = 0; i < expression.length; i++) {
  let sum = expression[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) {
    answer += sum;
  } else {
    answer -= sum;
  }
}

console.log(answer);
