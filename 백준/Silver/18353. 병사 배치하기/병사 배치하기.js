const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse();

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (target <= arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

let d = [0];

for (const x of arr) {
  if (x > d[d.length - 1]) {
    d.push(x);
  } else {
    const index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
console.log(N - (d.length - 1));
