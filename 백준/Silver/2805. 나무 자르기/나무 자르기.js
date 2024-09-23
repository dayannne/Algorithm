const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = trees.reduce((acc, tree) => Math.max(acc, tree));
let result = 0;

while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(최대 높이)
  let total = 0; // 자른 나무 길이의 합
  for (x of trees) {
    if (x >= mid) total += x - mid; // 나무 길이 더하기
  }
  if (total >= M) {
    start = mid + 1;
    result = mid;
  } else if (total < M) {
    end = mid - 1;
  }
}
console.log(result);
