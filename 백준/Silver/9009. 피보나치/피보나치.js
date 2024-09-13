const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let nums = input.slice(1, N + 1).map(Number);

for (const num of nums) {
  const arr = fibo(num);
  let curr = 0;
  const sum = [];

  for (let i = 0; i < arr.length; i++) {
    if (curr + arr[i] <= num) {
      curr += arr[i];
      sum.push(arr[i]);
    }
    if (curr === num) break;
  }

  console.log(sum.sort((a, b) => a - b).join(' '));
}

function fibo(num) {
  const arr = [1, 2];
  let nextFib = arr[arr.length - 1] + arr[arr.length - 2];

  while (nextFib <= num) {
    arr.push(nextFib);
    nextFib = arr[arr.length - 1] + arr[arr.length - 2];
  }
  
  return arr.sort((a, b) => b - a);
}