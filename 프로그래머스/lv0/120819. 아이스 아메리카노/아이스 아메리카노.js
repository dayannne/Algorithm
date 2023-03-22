function solution(money) {
    let answer = [];
    answer.push(~~(money/5500),money%5500);
    return answer;
}