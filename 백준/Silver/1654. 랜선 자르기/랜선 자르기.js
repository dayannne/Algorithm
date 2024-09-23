const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const cables = input.slice(1, N + 1).map(Number);

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = cables.reduce((acc, cable) => Math.max(acc, cable));
let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(최대)
  let total = 0; // 자른 나무 길이의 합
  for (x of cables) {
    total += parseInt(x / mid);
  }
  if (total >= K) {
    start = mid + 1;
    result = mid;
  } else if (total < K) {
    end = mid - 1;
  }
}
console.log(result);
