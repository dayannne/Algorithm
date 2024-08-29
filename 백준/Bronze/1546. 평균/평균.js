const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
const newScores = scores.map((n) => (n / maxScore) * 100);
const averageScore = newScores.reduce((a, c) => a + c) / N;
console.log(averageScore);
