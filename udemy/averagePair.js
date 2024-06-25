/* 다중 포인터 - averagePair

averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다. */

function averagePair(A, avg) {
  // avg = (A + B) / 2
  // avg * 2 = A + B
  const sum = avg * 2;
  const N = A.length;

  if (N === 0) return false;
  let i = 0;
  let j = 1;
  while (j < N && i < N - 1) {
    if (A[i] + A[j] === sum) return true;
    j++;
    // j가 마지막에 도달 ||  A[i] + A[j]가 sum보다 크면 다시 처음으로
    if (j === N - 1 || A[i] + A[j] > sum) {
      i++;
      j = i + 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
