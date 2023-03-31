function solution(slice, n) {
    var answer = 0;
    while((slice*answer)/n < 1){
          answer++;
          }
    return answer;
}