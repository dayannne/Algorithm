// https://wrtn.ai/chat/u/663397a3208f03982f4f7dae/c/667b64b1d5de9af491635dfd?type=u

function solution(A) {
  A.sort((a, b) => a - b);

  const N = A.length;
  let i = 0;
  let j = N - 1;
  let minAbsSum = Math.abs(A[i] + A[j]);

  while (i <= j) {
    const absSum = Math.abs(A[i] + A[j]);
    minAbsSum = Math.min(absSum, minAbsSum);

    if (absSum === 0) return 0;
    else if (A[i] + A[j] < 0) {
      // 합이 음수이면 i 포인터 증가
      i++;
    } else {
      // 합이 양수이면 j 포인터 감소
      j--;
    }
  }

  return minAbsSum;
}
