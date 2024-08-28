function solution(n) {
    // N(1) = 1
    // N(2) = 2
    // N(3) = 3
    // N(4) = 5
    // N(5) = 8
    // S[N] = S[N-1] + S[N-2]
    // => 피보나치!
    const d = Array(n+1).fill(0);

    // 첫번째, 두번째 피보나치 수는 무조건 1
    d[1] = 1;
    d[2] = 2;
 
    // 피보나치 함수 반복문 돌면서 구현
    for (let i = 3; i <= n; i++) {
      const fibo = d[i - 1] + d[i - 2]
      d[i] = fibo >  1000000007 ? fibo % 1000000007 : fibo;
    }

    return d[n]
}
