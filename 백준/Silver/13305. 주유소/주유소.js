const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const distances = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let i = 1;
let minPrice = prices[0];
let fee = prices[0] * distances[0];

while (i < distances.length) {
  const curr = prices[i];
  minPrice = Math.min(minPrice, curr);
  fee += minPrice * distances[i];
  i++;
}
console.log(fee);
