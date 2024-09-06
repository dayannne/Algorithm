const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let maxSameCount = 0; // 3 = 3, 2 = 2, 모두 다름 = 0
let sameNum = 0;

const numbers = input[0].split(' ');

for (const number of numbers) {
  const sameCount = numbers.filter((n) => n === number);
  if (sameCount.length >= 2) {
    maxSameCount = sameCount.length;
    sameNum = number;
  }
}

if (maxSameCount === 3) {
  console.log(10000 + sameNum * 1000);
} else if (maxSameCount === 2) {
  console.log(1000 + sameNum * 100);
} else {
  console.log(Math.max(...numbers) * 100);
}
