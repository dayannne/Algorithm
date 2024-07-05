function solution(elements) {
    const n = elements.length;
    const sum = new Array(2 * n).fill(0);

    // 원형 수열의 합 계산
    for (let i = 0; i < 2 * n; i++) {
        sum[i] = (sum[i - 1] || 0) + elements[i % n];
    }

    // 연속 부분 수열의 합 계산
    const result = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            result.add(sum[i + j] - sum[i]);
  
        }
    }

    return result.size;
}
