// https://app.codility.com/demo/results/trainingCV4QMG-UA8/

function solution(A) {
  let min = Number.MAX_SAFE_INTEGER;
  let leftSum = 0;
  let rightSum = A.reduce((a, c) => a + c, 0);
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    const diff = Math.abs(leftSum - rightSum);
    min = Math.min(diff, min);
  }
  return min;
}
