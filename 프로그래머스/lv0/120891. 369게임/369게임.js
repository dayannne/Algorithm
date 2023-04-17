function solution(order) {
let answer = order.toString()
    return answer.replace(/[^369]/g,'').length

}