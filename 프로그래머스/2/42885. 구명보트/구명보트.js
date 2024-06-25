function solution(people, limit) {
    // (가장 가벼운 사람, 가장 무거운 사람) 조합을 찾기 위해
    // 투포인터를 이용한다.
    let count = 0;
    const sorted = people.sort((a,b) => a-b)
    let i = 0, j = people.length - 1
    
    while(i <= j){

        if(sorted[i] + sorted[j] <= limit){
            i++
            j--
            count++
        }else{
            j--
            count++
        }
    }
    
    return count;
}