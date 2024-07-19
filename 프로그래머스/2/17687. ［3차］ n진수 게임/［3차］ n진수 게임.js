function solution(n, t, m, p) {
    let sequence = '';
    let answer = ''
    for(let i = 0 ; i < t * m ; i++){
        sequence += i.toString(n)
    }
    for(let i = p - 1 ; i < sequence.length ; i += m){
        if(answer.length === t) break
        answer += sequence[i]
    }
    answer = answer.toUpperCase()
    return answer;
}