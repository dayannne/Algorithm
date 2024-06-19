function solution(n) {
    let result = n + 1
    let nBinary = n.toString(2).split('').filter(n => n === '1').length
    while(true){
        const currBinary = result.toString(2).split('').filter(n => n === '1').length

        if(nBinary === currBinary) return result
        else result++
    }
    return result;
}