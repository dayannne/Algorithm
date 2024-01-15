// https://app.codility.com/demo/results/trainingT7TFS2-8D2/

function solution(A) {
  const arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
  return arr.length + 1;
}
