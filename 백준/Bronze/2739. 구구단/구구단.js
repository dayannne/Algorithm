const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const number = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
