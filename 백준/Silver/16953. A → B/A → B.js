const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);

let curr = B;
let count = 0;

while (curr >= A) {
  if (curr === A) {
    count++;
    break;
  }

  if (curr % 10 === 1) {
    curr = Number((curr + '').slice(0, (curr + '').length - 1));
  } else {
    curr /= 2;
  }
  count++;
}

if (curr === A) console.log(count);
else console.log(-1);
