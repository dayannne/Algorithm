function solution(topping) {
    let count = 0; 
    const leftSet = new Set();
    const rightSet = new Set();
    
    const leftCount = Array(10001).fill(0);
    const rightCount = Array(10001).fill(0);
    
    // 모든 토핑의 개수를 오른쪽 카운트 배열에 저장하고, 오른쪽 Set에 추가
    for (let t of topping) {
        rightSet.add(t);
        rightCount[t]++;
    }
    
    for (let t of topping) {
        leftSet.add(t); // 현재 토핑을 왼쪽 Set에 추가
        leftCount[t]++; // 현재 토핑의 왼쪽 개수 증가
        
        if (rightCount[t] === 1) {
            rightSet.delete(t); 
            // 개수가 1이면 오른쪽 Set에서 제거 (아래 rightCount[t]--에서 0이 될 것이므로)
        }
        rightCount[t]--; // 현재 토핑의 오른쪽 개수 감소
        
        // 왼쪽과 오른쪽의 토핑 종류 수가 같으면 count 증가
        if (leftSet.size === rightSet.size) {
            count++;
        }
    }
    
    return count; 
}
