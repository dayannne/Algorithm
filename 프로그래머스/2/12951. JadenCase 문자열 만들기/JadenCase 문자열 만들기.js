function solution(s) {
    let answer = ''
    let isFirst = false
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] !== ' ' && isFirst === false){
            isFirst = true
            answer += s[i].toUpperCase()
        }else if(s[i] === ' '){
            answer += s[i]
            isFirst = false
        }else{
            answer += s[i].toLowerCase()
        }
    }
    return answer
}