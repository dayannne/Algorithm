const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const moneyUnits = input
  .slice(1, N + 1)
  .map(Number)
  .sort((a, b) => b - a);

let remain = K;
let count = 0;
for (const money of moneyUnits) {
  if (money <= remain) {
    count += Math.floor(remain / money);
    remain %= money;
  }
  if (remain === 0) break;
}

console.log(count);
