function solution(n) {
    var answer = [];
    var i = 0;
    while(n>0){
        answer[i]=n%10;
        n = ~~(n/10);    
        i++;
    }
    return answer;
}