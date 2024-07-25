function solution(msg) {
    const answer = [];
    const arr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    let idx = 0
    let w = msg[0] // 사전에 존재 && 현재까지 입력된 모든 글자
    
    for(let i = 0 ; i < msg.length ; i++){
        const c = msg[i+1]
        const wIdx = arr.indexOf(w) 
        const wcIdx = arr.indexOf(w+c) 
        console.log(w,c,wIdx + 1,wcIdx)
        
        // 현재 입력 + 다음 글자가 사전에 없을 결우
        if(wcIdx === -1){
            answer.push(wIdx + 1)
            arr.push(w+c)
            w = c // 현재까지 입력된 글자를 초기화
        }
        // 현재 입력 + 다음 글자가 사전에 존재하는 경우
        else{         
            w = w+c // 현재까지 입력된 글자로 추가
        }
    }
    
    return answer;
}