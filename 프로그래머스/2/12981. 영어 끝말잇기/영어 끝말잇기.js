function solution(n, words) {
    let turn = [1,1] // 순서, 끝말잇기 차례
    let lookup = {};
    let i = 0
    while(i < words.length){
        // const head = words[i].slice(1)
        // const tail = words[i-1].slice(-1)
        if(i > 0 && (lookup[words[i]] || words[i].slice(0,1) !== words[i-1].slice(-1))){
            return turn
        }
        lookup[words[i]] = true
        
        if(turn[0] === n){
            turn[0] = 1
            turn[1]++
        }else{
            turn[0]++
        }
        i++
        
    }

    return [0,0];
}