/* 빈도수 세기 - sameFrequency
sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:
Time: O(N) */

function sameFrequency(A, B) {
  let strA = A + '';
  let strB = B + '';
  if (strA.length !== strB.length) return false;

  let arr = Array(10).fill(0);

  for (const num of strA) {
    arr[num] += 1;
  }
  for (const num of strB) {
    arr[num] -= 1;
  }
  for (const count of arr) {
    if (count !== 0) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
