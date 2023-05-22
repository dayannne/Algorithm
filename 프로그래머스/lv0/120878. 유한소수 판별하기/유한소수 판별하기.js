function solution(a, b) {
  let i = 2;
  let isFinite = true;

  // 기약 분수로 만들기
  while (i <= a) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    } else {
      i++;
    }
  }

  // 분모의 소인수분해 확인
  let j = 2;
  while (j <= b) {
    if (j === 2 || j === 5) {
      if (b % j === 0) {
        b /= j;
        continue
      }
    } else if (b % j === 0) {
        isFinite = false;
        break;
      }
    
    j++;
  }

  return isFinite ? 1 : 2;
}
