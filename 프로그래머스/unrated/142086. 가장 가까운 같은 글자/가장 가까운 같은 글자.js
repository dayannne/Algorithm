function solution(s) {
    const answer = [];
    const obj = {}
    for(let i = 0 ; i < s.length ; i++){
        if(Object.keys(obj).includes(s[i])){
            answer.push(i - obj[s[i]])
            obj[s[i]] = i;
        }else{
            answer.push(-1)
            obj[s[i]] = i;
        }
    }
    return answer;
}