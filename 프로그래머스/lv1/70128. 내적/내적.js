function solution(a, b) {
    return a.map((_,n) => a[n] * b[n]).reduce((a,c) => a+c);
}