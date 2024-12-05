const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let visited = new Array(N).fill(false); // 각 원소 인덱스 방문 여부
let selected = []; // 현재 조합에 포함된 원소의 인덱스

let answer = '';

function dfs(arr, depth, start) {
  if (depth === M) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0, 0);
console.log(answer);
