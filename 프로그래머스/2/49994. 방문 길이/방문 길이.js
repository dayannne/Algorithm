function solution(dirs) {
    const prevLoads = new Set()
    const currPoint = [0,0]
    const lookup = {
        'U': [1, 1], // 방향(x=0,y=1), 이동
        'D': [1, -1],
        'R': [0, 1],
        'L': [0, -1], 
    }
    for(const dir of dirs){
        const prevPoint = currPoint.slice()
        const coordinate = lookup[dir][0]
        const movement = lookup[dir][1]
        if(currPoint[coordinate] + movement > 5 || currPoint[coordinate] + movement < -5){
            continue
        }
       
        currPoint[coordinate] += movement        
        const load = (prevPoint[0] + '') + (currPoint[0] + '') + (prevPoint[1] + '') + (currPoint[1] + '')
        const load2 = (currPoint[0] + '') + (prevPoint[0] + '') + (prevPoint[1] + '') + (currPoint[1] + '')
        const load3 = (prevPoint[0] + '') + (currPoint[0] + '') + (currPoint[1] + '') + (prevPoint[1] + '')
        if(!prevLoads.has(load) && !prevLoads.has(load2) && !prevLoads.has(load3)) prevLoads.add(load,load2,load3)
    }

    return prevLoads.size;
}