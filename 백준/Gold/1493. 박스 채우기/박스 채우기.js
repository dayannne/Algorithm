const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i++;
  return i - 1;
}

let [X, Y, Z] = input[0].split(' ').map(Number);

let N = Number(input[1]);
let cubes = Array(20).fill(0);

for (let i = 2; i <= N + 1; i++) {
  let [A, B] = input[i].split(' ').map(Number);
  cubes[A] = B;
}

let size = Math.min(nearestSquare(X), nearestSquare(Y), nearestSquare(Z));
let res = 0;
let used = 0;
for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i;
  let required =
    parseInt(X / cur) * parseInt(Y / cur) * parseInt(Z / cur) - used;
  let usage = Math.min(required, cubes[i]);

  res += usage;
  used += usage;
}

if (used == X * Y * Z) console.log(res);
else console.log(-1);
