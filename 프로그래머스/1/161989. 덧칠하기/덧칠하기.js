function solution(n, m, section) {
    // 1부터 section 길이까지 반복
    // 현재 덧칠 위치 - 덧칠 시작점이 덧칠할 수 있는 길이(m)보다 크거나 같을 때 count++
    
    let count = 1; // 최소 덧칠 횟수 - 예제 1의 경우 2345
    let start = section[0]
    for (let i = 1 ; i <= section.length ; i++){
        if(section[i] - start >= m){
            count++
            start = section[i]
        }
        
    }
   
    return count;
}