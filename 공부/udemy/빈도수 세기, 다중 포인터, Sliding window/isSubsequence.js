/* 다중 포인터 - isSubsequence

두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다. */

// 강사님 답변 (재귀)
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

// 나의 답변
function isSubsequence(A, B) {
  let i = 0;
  let j = 0;
  let lastPoint = 0;

  while (i < A.length) {
    if (A[i] === B[j]) {
      if (i > lastPoint) return false;
      i++;
      lastPoint = i;
    } else {
      j++;
      if (j === B.length) return false;
    }
  }

  return true;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
