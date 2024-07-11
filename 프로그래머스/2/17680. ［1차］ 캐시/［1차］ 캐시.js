function solution(cacheSize, cities) {   
    // Cache hit (삽입 정렬 응용)
    // - 캐시 배열에서 hit 지점 까지 이동 (a[i] = a[i-1])
    // - Hit 값을 캐시 배열 0번으로 이동
    // Cache miss?
    // - cache Arr의 첫 번째 요소에 값 추가 (unshirt)
    // - cache Arr의 마지막 요소 삭제 (pop)

    
    var answer = 0;
    let time = 0
    let cache = []

    for(let i = 0 ; i < cities.length ; i++){
        if(cacheSize === 0) {
            time += 5
            continue
        }
        
        const str = cities[i].toLowerCase()
        let isFull = cache.length === cacheSize
        let isHit = cache.includes(str)
        if(isHit){ // cache hit
            cache.splice(cache.indexOf(str), 1)
            cache.push(str)
            time++
        }else{ // cache miss
            if(isFull) {
                cache.shift()
            } cache.push(str)
            time += 5
        }
    }

    return time;
}