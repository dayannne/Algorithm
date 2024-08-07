function solution(land) {
    const length = land.length
    
    for(let i = 1; i < length ; i++){
        land[i][0] += maxNum(land[i-1][1],land[i-1][2],land[i-1][3])
        land[i][1] += maxNum(land[i-1][0],land[i-1][2],land[i-1][3])
        land[i][2] += maxNum(land[i-1][0],land[i-1][1],land[i-1][3])
        land[i][3] += maxNum(land[i-1][0],land[i-1][1],land[i-1][2])

    }

    return maxArr(land[length-1])
}

function maxNum(a,b,c){
    return Math.max(Math.max(a,b),c)
}

function maxArr(arr){
    let max = 0
    for(const num of arr){
        max = Math.max(max,num)
    }
    return max
}