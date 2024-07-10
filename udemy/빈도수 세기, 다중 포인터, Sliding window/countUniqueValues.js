// 다중 포인터 - 두개의 포인터를 설정하고 이동하면서 구하는 문제

// 강사 답변
function countUniqueValues(A) {
  if (A.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[i] !== A[j]) {
      i++;
      A[i] = A[j];
    }
  }
  return i + 1;
}

// 나의 답변
function myCountUniqueValues(A) {
  if (A.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < A.length) {
    if (A[i] === A[j]) {
      j++;
    } else {
      i++;
      A[i] = A[j];
      j++;
    }
  }
  return i + 1;
}

console.log(myCountUniqueValues([1, 1, 1, 1, 1, 2])); // 2;
console.log(myCountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7;
console.log(myCountUniqueValues([])); // 0;
console.log(myCountUniqueValues([-2, -1, -1, 0, 1])); // 4;
