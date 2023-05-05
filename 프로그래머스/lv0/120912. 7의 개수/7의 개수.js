function solution(array) {
    let answer = array.join('').split('').filter(n=> n ==7);
    return answer.length;
}