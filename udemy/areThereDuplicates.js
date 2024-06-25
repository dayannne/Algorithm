/* 
빈도수 세기 / 다중 포인터 - areThereDuplicates
가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
 */

// 강사 답변(다중 포인터)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//강사  답변 (Set)
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// 내 답변 (빈도 수 세기)
function areThereDuplicates(...arr) {
  arr.sort((a, b) => a - b);
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in lookup) return true;
    lookup[arr[i]] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
