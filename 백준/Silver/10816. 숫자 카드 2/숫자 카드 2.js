const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = [Number(input[0]), Number(input[2])];
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const targets = input[3].split(' ').map(Number);

const arr = Array(targets.length).fill(0);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function countByRange(arr, value) {
  let rightIndex = upperBound(arr, value, 0, arr.length);
  let leftIndex = lowerBound(arr, value, 0, arr.length);
  return rightIndex - leftIndex;
}

for (let i = 0; i < arr.length; i++) {
  const target = targets[i];
  const count = countByRange(cards, target);
  arr[i] = count;
}

console.log(arr.join(' '));
