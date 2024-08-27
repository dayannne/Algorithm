function solution(x, y, n) {
    let visited = [y]; // 탐색을 마친 노드들
    let depth = 1 // 노드의 depth === 횟수
    let lastNode = 0 // 현재 depth의 마지막 노드
    let i = 0 // visited index
    
    if(x === y) return 0
    
    while (true) { 
        const number = visited[i]
        const minusN = number - n
        const devideTwo = number / 2
        const devideThree = number / 3
   
        if(minusN === x || devideTwo === x || devideThree === x){
            return depth
        }
        if(minusN > 0 ) visited.push(minusN)
        if(devideTwo % 1 === 0) visited.push(devideTwo)
        if(devideThree % 1 === 0) visited.push(devideThree)

        if(minusN < 0 && devideTwo % 1 !== 0 && devideThree % 1 !== 0) return -1
        
        if(lastNode === i) {
            lastNode = visited.length-1
            depth++
        }
        i++
       
    }
    
    return -1
}

// x  y  n
// 10 40 5
// 이라면 노드는 [(0) 40 //(1) 35, 20 //(3) 30 //(3) 15, 10 ...] 이런 식으로 담긴다