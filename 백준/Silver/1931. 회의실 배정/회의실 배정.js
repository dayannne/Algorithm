const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const meetings = input.slice(1, N + 1).map((s) => s.split(' ').map(Number));

meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let count = 1;
let curr = 0;
for (let i = 1; i < N; i++) {
  if (meetings[i][0] >= meetings[curr][1]) {
    curr = i;
    count++;
  }
}

console.log(count);
