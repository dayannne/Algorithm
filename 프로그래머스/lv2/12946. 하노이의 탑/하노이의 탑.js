https: function solution(n) {
  let answer = [];
  let A = 1;
  let B = 2;
  let C = 3;
  function Hanoi(n, A, B, C) {
    if (n == 1) {
      answer.push([A, C]);
      return answer;
    } else {
      Hanoi(n - 1, A, C, B);
      answer.push([A, C]);
      Hanoi(n - 1, B, A, C);
    }
  }
  Hanoi(n, A, B, C);
  return answer;
}