const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = input[0];

for (let i = 1; i <= T; i++) {
  const classroom = input[i].split(' ');
  const count = classroom[0];
  const scores = classroom.slice(1).map(Number);
  const average = scores.reduce((a, c) => a + c) / count;
  const above = scores.filter((score) => score > average).length;
  const percentage = ((above / count) * 100).toFixed(3);
  console.log(`${percentage}%`);
}
