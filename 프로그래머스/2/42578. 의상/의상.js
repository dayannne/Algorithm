function solution(clothes) {
    // 안입은 경우를 포함하며 종류별 개수 카운트
    // {"headgear":3,"eyewear":2}
    // 3 * 2 - 1 = 5
    var answer = 0;
    let lookup = {}
    for(let i = 0 ; i < clothes.length ; i++){
        if(lookup[clothes[i][1]]) lookup[clothes[i][1]] += 1
        else lookup[clothes[i][1]] = 2 // 안입은 경우 포함
    }
    const counts = Object.values(lookup).reduce((a,c) => a*c) - 1 // 모두 안입은 경우 제외 (안입음, 안입음)
  
    return counts;
}