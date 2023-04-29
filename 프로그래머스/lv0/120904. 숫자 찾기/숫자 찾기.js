function solution(num, k) {
    let str = num + ''
    return str.indexOf(k) > -1 ? str.indexOf(k) + 1 : -1
}