function solution(n, left, right) {
    // 0 1 2 3 4 5 6 7 8 을 3으로 나누면?
    // 몫    : 0 0 0 1 1 1 2 2 2
    // 나머지 : 0 1 2 0 1 2 0 1 2
    // 1 2 3 2 2 3 3 3 3
    
    let arr = Array(right - left + 1).fill(0)
    let num = left // left 위치부터 값을 계산하기 위함
    for(let i = 0 ; i < arr.length ; i++){
        const col = Math.floor(num / n)
        const row = num % n
        arr[i] = col > row ? col + 1 : row + 1
        num++
    }
 
    
    return arr;
}