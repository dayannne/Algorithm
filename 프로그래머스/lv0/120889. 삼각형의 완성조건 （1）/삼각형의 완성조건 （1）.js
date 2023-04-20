function solution(sides) {
    let max = Math.max(...sides)
    let sum = sides.reduce((a,b)=>a + b)

    return sum - max > max ? 1 : 2
}