function solution(k, tangerine) {
    const N = tangerine.length
    const sizes = Array(Math.max(...tangerine)+1).fill(0);
    
    for(const size of tangerine){
       sizes[size] += 1
    }
    sizes.sort((a,b)=>b-a)
    
    let i = 0
    let count = 0 // 귤 개수
    let sizeCount = 0 // 귤 종류 수
    while(count < k){
        count += sizes[i]
        sizeCount += 1
        i++
        

    }
    
    return sizeCount;
}