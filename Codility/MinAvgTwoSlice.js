// https://app.codility.com/demo/results/training4HQSPP-UW2/

/*

💡 a <= b일 때, a와 b의 평균은 a 이상이 된다. (a = b 일 때, a와 b의 평균은 a, 즉 두 수가 같은 경우는 a 혹은 b가 된다)

- 마찬가지로, (a + b) <= (c + d)일 때, (a, b)와 (c, d)의 평균은 (a + b) 이상이 된다.
- 결국, 원소가 4개(a, b, c, d)인 그룹은 (a, b)와 (c, d)를 나누었을 때, 각각의 평균의 작은 값 이상이 된다.
    - 2개인 그룹이 작은 값이 되므로 4개의 그룹은 고려할 필요가 없어진다.

*/

function solution(A) {
  let minIndex = 0;
  let minAvg = (A[0] + A[1]) / 2;
  let avg;
  for (let i = 2; i < A.length; i++) {
    avg = (A[i - 2] + A[i - 1] + A[i]) / 3;
    if (avg < minAvg) {
      minAvg = avg;
      minIndex = i - 2;
    }
    avg = (A[i - 1] + A[i]) / 2;
    if (avg < minAvg) {
      minAvg = avg;
      minIndex = i - 1;
    }
  }
  return minIndex;
}
