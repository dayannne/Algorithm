function solution(n) {
    // 문자열 변환 - 배열 변환 - number 변환 - 누적합
    var answer = n.toString().split('').map(str => parseInt(str)).reduce((a,b)=> a+b);
    return answer;
}