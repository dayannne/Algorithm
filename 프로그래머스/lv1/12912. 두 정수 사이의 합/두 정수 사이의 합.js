function solution(a, b) {
    // 등차 수열의 합 n 은 항의 개수, a는 첫번째 값, d는 공차
    // { 2a + (n-1)d } * n/2 (d는 여기서는 무조건 1)
    // { 2a + n - 1 } * n/2
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const n = max - min + 1; // 항의 개수
    
    return ((2 * min + n - 1) * n) / 2;
}
