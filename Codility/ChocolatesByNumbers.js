//app.codility.com/demo/results/trainingU3MVFZ-Z3Z/

https: function getGCD(a, b) {
  if (a < b) a, (b = b), a;
  if (a % b == 0) return b;
  return getGCD(b, a % b);
}

function solution(N, M) {
  return N / getGCD(N, M);
}
