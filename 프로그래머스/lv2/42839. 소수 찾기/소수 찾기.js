// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let max = parseInt(
    numbers
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  ); // 나올 수 있는 가장 큰 값을 저장, [1,7]이라면 71
  let combNumbers = []; // 만들 수 있는 숫자 조합들을 저장
  let cnt = 0;

  /* max까지 for문 돌리기 */
  // i를 문자열로 만들고,
  // numbers 숫자가 포함되면 문자열에서 그 숫자를 하나씩 빼면서
  // 문자열이 비게 되는 경우(모두 포함되는 경우)에만 combNumbers.push(i)
  for (let i = 0; i <= max; i++) {
    let num = i + '';
    for (let x of numbers) {
      if (num.includes(x)) {
        num = num.replace(x, ''); // replace를 사용해 1개만 없앤다.
      }
    }
    if (num.length === 0) {
      combNumbers.push(parseInt(i));
    }
  }

  // 소수 판별 후 카운트 - 위 for문에서 아예 미리 소수를 판별할 수도 있겠다!
  for (let x of combNumbers) {
    if (isPrime(x)) {
      cnt++;
    }
  }
  return cnt;
}