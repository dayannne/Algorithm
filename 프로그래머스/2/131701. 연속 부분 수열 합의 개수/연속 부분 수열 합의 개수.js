function solution(elements) {
    // set으로 합들을 담을 공간 만들기
    const sums = new Set()
    const N = elements.length   
    let firstSum = 0

    for(let i = 0 ; i < N ; i++){
        firstSum += elements[i]
        sums.add(firstSum)
    }
    
    let total = elements[0] // 현재 길이의 초기 합
    let sum = elements[0] // 현재 합
    let length = 1
    let start = 0
    let end = 1
    
    while(length < N){
        if(start === N) {
            length++
            total += elements[length-1]
            sum = total
            start = 0
            end = length 
            continue
        }
        sum = sum - elements[start] + elements[end]
        sums.add(sum)
 
        if(end === N - 1) end = 0
        else end++
        start++
 
    }

    return sums.size;
}