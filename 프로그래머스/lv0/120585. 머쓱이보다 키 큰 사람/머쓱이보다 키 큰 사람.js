function solution(array, height) {
    var answer = array.filter(n => n > height).length;
    return answer;
}