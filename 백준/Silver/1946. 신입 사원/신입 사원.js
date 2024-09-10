const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

let i = 1;

for (let t = 1; t <= T; t++) {
  const N = Number(input[i]);

  const ranks = input
    .slice(i + 1, i + N + 1)
    .map((arr) => arr.split(' ').map(Number));

  ranks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let count = 0;
  let minRank = 100001;
  ranks.forEach(([first, second]) => {
    if (second < minRank) {
      minRank = second;
      count++;
    }
  });
  console.log(count);
  i += N + 1;
}
