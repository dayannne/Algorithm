function solution(sequence, k) {
    const N = sequence.length
    let minLength = sequence.length + 1;
    let idx = [0,0]
    
    let sum = 0
    let startIdx = 0
    let lastIdx = 0
    
    while(lastIdx <= N){
        if(sum < k){
            sum += sequence[lastIdx++]
        }else{
            if(sum === k && lastIdx - startIdx < minLength){
                idx[0] = startIdx
                idx[1] = lastIdx - 1
                minLength = lastIdx - startIdx
            }
            sum -= sequence[startIdx++]
        }
        
    }
   
    return idx;
}