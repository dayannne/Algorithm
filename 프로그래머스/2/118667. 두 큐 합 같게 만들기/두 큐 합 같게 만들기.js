function solution(queue1, queue2) {
    const totalSum = queue1.reduce((a, c) => a + c, 0) + queue2.reduce((a, c) => a + c, 0);
    
    // 두 큐의 총합이 홀수라면 절대 같아질 수 없음
    if (totalSum % 2 !== 0) return -1;

    const target = totalSum / 2;
    let queue = [...queue1, ...queue2];
    let currentSum = queue1.reduce((a, c) => a + c, 0);
    let start = 0;
    let end = queue1.length;
    let count = 0;
    const maxOperations = queue.length * 2; // 최대 반복 횟수 제한

    while (count <= maxOperations) {
        if (currentSum === target) return count;
        if (currentSum < target) {
            currentSum += queue[end % queue.length];
            end++;
        } else {
            currentSum -= queue[start % queue.length];
            start++;
        }
        count++;
    }
    
    return -1;
}
