const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);
let N = 0;
let arr = [];

function dfs(result, length) {
  if (length === N - 1) {
    let str = '';
    for (let i = 0; i < N - 1; i++) str += arr[i] + result[i];
    str += arr[N - 1] + ''; // 마지막 숫자를 붙임
    current = eval(str.split(' ').join('')); // 공백 제거 후 수식 평가
    if (current === 0) console.log(str); // 결과가 0이면 출력
    return;
  }
  for (let x of [' ', '+', '-']) {
    result.push(x);
    dfs(result, length + 1); // 다음 자리에 대해 재귀 호출
    result.pop(); // 백트래킹: 마지막에 추가한 연산자를 제거
  }
}

for (let t = 1; t <= T; t++) {
  N = Number(input[t]);
  arr = [];
  for (let i = 1; i <= N; i++) arr.push(i);
  dfs([], 0);
  console.log(); // 한 줄 띄우기
}