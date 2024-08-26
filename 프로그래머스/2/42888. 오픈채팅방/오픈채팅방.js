function solution(record) {
    const result = [];
    const users = {}
    for(const str of record){
        const rec = str.split(' ')
        const history = rec[0]
        const userId = rec[1]
        const username = rec[2]

        if(history === 'Enter' || history === 'Change'){
            users[userId] = username
        }
    }
    for(let str of record){
        const rec = str.split(' ')
        const history = rec[0]
        const userId = rec[1]
        const username = rec[2]
         if(history === 'Enter'){
            result.push(`${users[userId]}님이 들어왔습니다.`)
        }else if(history === 'Leave'){
            result.push(`${users[userId]}님이 나갔습니다.`) 
        }
    }
    return result;
}