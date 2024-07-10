function solution(n) {
    // 1 = 1가지
    // 2 = 2가지
    // 3 = 3가지
    // 4 = 5가지
    // ...피보나치 수열
    // n만큼 배열 만들고 더하기
    
    const fibo = Array(n).fill(0);
    fibo[1] = 1
    fibo[2] = 2
    
    for(let i = 3 ; i <= n ; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567
    }

    return fibo[n];
}