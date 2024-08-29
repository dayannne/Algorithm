const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const set = new Set();

for (let i = 0; i < 10; i++) {
  set.add(input[i] % 42);
}
console.log(set.size);
