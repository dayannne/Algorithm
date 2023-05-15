function solution(spell, dic) {
    let answer = false
    for(let x of dic){
        let isAllExist = true
        for(let y of spell){
         if(x.split('').filter(s => s === y).length !== 1) isAllExist = false
        }
        if(isAllExist) answer = true
    }
    return answer ? 1 : 2 
}