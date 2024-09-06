const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);

let users = input.slice(1, N + 1).sort((a, b) => {
  const ageA = Number(a.split(' ')[0]);
  const ageB = Number(b.split(' ')[0]);
  return ageA - ageB;
});

console.log(users.join('\n'));
