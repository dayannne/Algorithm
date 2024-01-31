// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {
  // - B를 K로 나눈 몫은 바로 나누었을 떄 0으로 떨어지는 모든 정수의 개수가 됨 (K의 배수니까!)
  // - A를 K로 나눈 몫을 빼주면

  let count = 0;

  if (A % K === 0) {
    count++;
  }

  count += Math.floor(B / K) - Math.floor(A / K);

  return count;
}
