// 빈도수 세기 - 객체 형태의 빈도 카운터를 만들어 구하는 문제

// 강사 답변
function validAnagram(A, B) {
  if (A.length !== B.length) return false;

  const lookup = {};

  for (let i = 0; i < A.length; i++) {
    let letter = A[i];
    // 만약 해당 문자가 존재하면 증가, 그렇지 않으면 1로 세팅
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < B.length; i++) {
    let letter = B[i];
    // 해당 문자를 찾을 수 없거나 문자열의 개수가 0일 때 anagram이 아님
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1; // 존재할 경우에-1
  }
}

// 나의 답변
function myValidAnagram(A, B) {
  const objectA = {}; // 문자열 A의 빈도 카운터
  const objectB = {}; // 문자열 B의 빈도 카운터
  if (A.length === 0 && B.length === 0) return true;
  for (const str of A) {
    if (objectA[str]) objectA[str] += 1;
    else objectA[str] = 1;
  }
  for (const str of B) {
    if (objectB[str]) objectB[str] += 1;
    else objectB[str] = 1;
  }

  for (let i = 0; i < A.length; i++) {
    if (objectA[A[i]] !== objectB[A[i]]) {
      return false;
    }
  }
  return true;
}

console.log(myValidAnagram('', '')); // true
console.log(myValidAnagram('aaz', 'zza')); // false
console.log(myValidAnagram('anagram', 'nagaram')); // true
console.log(myValidAnagram('rat', 'car')); // false))// false
console.log(myValidAnagram('awesome', 'awesom')); // false
console.log(myValidAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(myValidAnagram('qwerty', 'qeywrt')); // true
console.log(myValidAnagram('texttwisttime', 'timetwisttext')); //
