function solution(s) {
    let copyStr = s.split(' ');
    let answer = 0
    for(let i = 0; i<copyStr.length;i++){
        if(copyStr[i] ==='Z'){
            answer -= parseInt(copyStr[i-1])
        }else{answer += parseInt(copyStr[i])}
    }
return answer
}