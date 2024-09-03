let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) { // 한 줄씩 입력받아 배열에 넣기
arr.push(Number(input[i]));
}
arr.sort(function(a, b) { // 오름차순 정렬 수행
return a - b;
})
let answer = "";
for (let i = 0; i < arr.length; i++) {
answer += arr[i] + "\n";
}
console.log(answer);
