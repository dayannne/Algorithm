// https://app.codility.com/demo/results/trainingQRQ297-ACZ/

function solution(A) {
  const arr = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (arr[i] - 1 !== i) {
      return 0;
    }
  }
  return 1;
}
