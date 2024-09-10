const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = 0;
let sugar = Number(input[0]);

while (sugar >= 0) {
  if (sugar === 0 || sugar % 5 === 0) {
    if (sugar % 5 === 0) {
      count += Math.floor(sugar / 5);
      sugar %= 5;
    }
    break;
  }
  sugar -= 3;
  count++;
}
if (sugar !== 0) console.log(-1);
else console.log(count);
