function solution(s) {
    const que = s.split('')
    const stack = []
    const brackets = {']':'[','}':'{',')':'('}
    let answer = 0;
    
    for(let i = 0 ; i < que.length ; i++){
        que.push(que.shift())
        let isCorrect = true
        
        for(let j = 0 ; j < que.length ; j++){
            const bracket = que[j]
            if(bracket === '[' || bracket === '{' || bracket === '(') stack.push(bracket)
            else if(brackets[bracket] !== stack.pop()){
                isCorrect = false
                break
            }
        }
        if(stack.length === 0 && isCorrect) answer++
    }
    return answer;
}