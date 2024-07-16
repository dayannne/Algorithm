function solution(s) {
    // 빈도수로 순서 파악하기
    // {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
    // 2 => 4번, 1 => 3번 , 3 => 2번 , 4 => 1번
    // 빈도 수가 가장 많으면 길이가 1인 튜플부터 배치됨
    
    const counts = {}
    const arr = s.replaceAll("{","").replaceAll("}","").split(",")

    for( const num of arr){
        if(counts[num]) counts[num] += 1
        else counts[num] = 1
    }

    const answer = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([key]) => parseInt(key));
    
    return answer;
}