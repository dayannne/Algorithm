const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const distances = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let minPrice = prices[0];
let fee = BigInt(0);

for (let i = 0; i < distances.length; i++) {
  minPrice = Math.min(minPrice, prices[i]);
  fee += BigInt(minPrice) * BigInt(distances[i]);
}
console.log(fee.toString());
