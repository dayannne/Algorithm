function solution(n) {
    var answer = Math.sqrt(n);
    
    // 정수인지 판별
    //return Number.isInteger(answer) ? 1 : 2
    return answer % 1 === 0 ? 1 : 2;
}