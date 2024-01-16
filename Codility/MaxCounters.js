function solution(N, A) {
  let arr = new Array(N).fill(0);
  let maxNum = 0;
  let currNum = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      arr[A[i] - 1] = Math.max(arr[A[i] - 1], maxNum) + 1;
      currNum = Math.max(currNum, arr[A[i] - 1]);
    } else if (A[i] === N + 1) {
      maxNum = currNum;
    }
  }

  for (let i = 0; i < N; i++) {
    arr[i] = Math.max(arr[i], maxNum);
  }

  return arr;
}
