const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let [R, str] = input[i].split(' ');
  str = str.split('').map((s) => s.repeat(R));
  console.log(str.join(''));
}
