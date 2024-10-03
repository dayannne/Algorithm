const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

let sequence = [];
let visited = {};

function recursive() {
  if (sequence.length === N) {
    console.log(sequence.join(' '));
    return;
  }
  for (let i = 1; i < N + 1; i++) {
    if (visited[i]) continue;
    visited[i] = true; // 방문 처리
    sequence.push(i);
    recursive(i + 1);
    sequence.pop();
    visited[i] = false; // 방문 해제
  }
}
recursive();

