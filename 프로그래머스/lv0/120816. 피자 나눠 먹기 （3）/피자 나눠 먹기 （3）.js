function solution(slice, n) {
    var answer = 0;
    while(n/(slice*answer) >1){
          answer++;
          }
    return answer;
}