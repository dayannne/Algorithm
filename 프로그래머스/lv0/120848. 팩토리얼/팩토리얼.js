function solution(n) {
  let answer = 1;
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    answer *= i;
    if (answer > n) {
      break;
    }
    count++;
  }
  return count;
}