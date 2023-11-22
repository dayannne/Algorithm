function solution(n) {
    let answer = 1
    let count = 1
    n -= count
    while(n>0){
        count++
        n -= count
        if(n%count === 0 ) answer++
    }    
    return answer;
}