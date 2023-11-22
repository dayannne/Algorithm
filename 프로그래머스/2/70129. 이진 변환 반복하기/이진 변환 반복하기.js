function solution(s) {
    let answer = [0,0]
    while(s !== '1'){
        const zeros = s.replaceAll('1', '').length
        s = s.replaceAll('0', '').length.toString(2)
        answer[0]++
        answer[1] += zeros
    }
    return answer
}