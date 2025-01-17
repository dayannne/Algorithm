function solution(triangle) {
    const N = triangle.length 
    for(let i = N - 2 ; i > -1 ; i--){
        for(let j = 0 ; j < i + 1 ; j++){
            triangle[i][j] = Math.max(triangle[i][j] + triangle[i+1][j],triangle[i][j] + triangle[i+1][j+1])
        }
    }
    return triangle[0][0];
}