// https://app.codility.com/demo/results/training6TNXPQ-6KR/

function solution(X, A) {
  const arr = new Array(X).fill(0);
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= arr.length && arr[A[i] - 1] === 0) {
      arr[A[i] - 1] = 1;
      count++;

      if (count === X) {
        return i;
      }
    }
  }

  return -1;
}
