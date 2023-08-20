function solution(t, p) {
    var answer = 0;
    for(let i = 0 ; i <= t.length - p.length ; i++){
        const tmp = t.substr(i,p.length)
        if(tmp <= p){
            answer++
        }
    }
    return answer;
}