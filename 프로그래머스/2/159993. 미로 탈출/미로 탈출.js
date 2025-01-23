function solution(maps) {
    var answer = 0;
    const [xLength, yLength] = [maps[0].length, maps.length]
    // 1. Start, Lever, End 위치 인덱스 찾기
    let start, lever, end;
    maps.forEach((map,rowIndex)=>{
        if(map.indexOf('S') > -1) start = [map.indexOf('S'), rowIndex] // x,y
        if(map.indexOf('L') > -1) lever = [map.indexOf('L'), rowIndex]
        if(map.indexOf('E') > -1) end = [map.indexOf('E'), rowIndex]
    })

    let point = start.slice();
    let count = 0;
    
    function bfs(start, destination){
        const queue = [[...start, 0]] // x,y,거리
        const visited = Array.from({ length: yLength }, () => Array(xLength).fill(false)); // 방문 체크용
        visited[start[1]][start[0]] = true; // 시작 지점 true로

        while(true){
            const [x,y,dist] = queue.shift() // 이전 방문 지점 가져오기
            if(x === destination[0] && y === destination[1]) return dist;
            
            for(const [dx,dy] of [[0,1],[0,-1],[-1,0],[1,0]]){
                const nx = x + dx
                const ny = y + dy
                
                if(nx >= 0 && ny >= 0 
                   && nx < xLength && ny < yLength
                   && maps[ny][nx] !== 'X'
                   && !visited[ny][nx]
                  ){
                    visited[ny][nx] = true
                    queue.push([nx,ny,dist+1])
                    
                }
            }
            if(!queue[0]) return -1 // queue에 값이 안담김 === 상하좌우 이동할 수 있는 곳이 없음 이면 -1 반환
      
        }
        return -1
            
    }
    // 2. Start부터 Lever까지 
    const startToLever = bfs(start,lever)
    // 3. Lever부터 End까지 
    const LeverToEnd = bfs(lever,end)
    console.log(startToLever,LeverToEnd)
   
    if(startToLever === -1 || LeverToEnd === -1) return -1
    return startToLever + LeverToEnd;
}