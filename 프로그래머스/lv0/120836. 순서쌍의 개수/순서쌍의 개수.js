function solution(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        
        if (n % i === 0) {
            // i가 n의 약수인 경우
            count++;
            if (n / i !== i) {
                // i와 n/i가 다른 경우
                count++;
            }
        }
    }
    return count;
}