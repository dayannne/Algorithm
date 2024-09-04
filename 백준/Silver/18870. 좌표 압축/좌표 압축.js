const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);

let points = input[1].split(' ').map(Number);
let unuquePoints = [...new Set(points)].sort((a, b) => a - b);

const lookup = {};
unuquePoints.forEach((point, idx) => (lookup[point] = idx));

points = points.map((point) => lookup[point]);

console.log(points.join(' '));
