// https://app.codility.com/demo/results/trainingCH6Q59-TCB/

function solution(A) {
  // 1부터 순열일 때 - 마지막 수보다 큰 수
  // 제일 작은 값이 1이 아닐 때 - 1 반환환
  // 중간에 빈 값이 있을 때 - 그 중간 값
  // 값이 모두 음수일 때 - 1 반환

  const arr = A.sort((a, b) => a - b);
  const maxNum = arr[arr.length - 1];
  let currNum = 1;
  let nextNum;
  if ((arr[0] > 0 && arr[0] !== 1) || maxNum <= 0) return 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currNum) currNum += 1;
  }
  return currNum;
}
