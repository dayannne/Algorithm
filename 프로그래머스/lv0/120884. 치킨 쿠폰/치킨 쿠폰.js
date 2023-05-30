function solution(chicken) {
    let answer = 0;
    
    while(chicken * 0.1 >= 1) {
        answer += Math.round(chicken / 10);
        chicken = Math.floor(chicken / 10);
    }
    
    return answer;
}