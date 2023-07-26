function solution(n) {
    var answer = Math.sqrt(n);
    return Number.isInteger(Math.sqrt(n)) ? (answer +1)*(answer +1) : -1; // 제곱표현 -> Math.pow(answer+1,2) 도 가능
}