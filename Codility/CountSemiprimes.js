//app.codility.com/demo/results/trainingKNWDK6-KC3/

//- 소수를 구한 다음 반소수 구할 때 소수인지 파악 후 소수 * 소수로 반소수 구하기
//- 누적 합 배열로 반소수 개수 각 num에 해당하는 index에 저장하기

https: function solution(N, P, Q) {
  const length = P.length;

  // 에라토스테네스의 체를 이용해 소수 구하기
  const primes = Array(N + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i <= N; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= N; j += i) {
        primes[j] = false;
      }
    }
  }

  // 반소수 구하기
  const semiprimes = Array(N + 1).fill(0);
  for (let i = 2; i <= N; i++) {
    if (primes[i]) {
      for (let j = i; j * i <= N; j++) {
        if (primes[j]) {
          semiprimes[i * j] = 1;
        }
      }
    }
  }

  // 반소수의 누적 합 배열 생성
  const prefixSum = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + semiprimes[i];
  }

  // 각 쿼리에 대해 결과 계산
  const result = Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    result[i] = prefixSum[Q[i]] - prefixSum[P[i] - 1];
  }

  return result;
}
