const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[2]);
const provinces = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = provinces.reduce((a, b) => Math.max(a, b));
let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산의 총액 계산
  for (x of provinces) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x); // 예산 배정
  }
  if (total <= M) {
    // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
    result = mid;
    start = mid + 1;
  } else {
    // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1;
  }
}
console.log(result);
