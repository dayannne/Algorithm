function solution(n) {
    let num = n
    var answer = new Set()
    let i = 2
    while(num > 1){
        if(num%i === 0){
            num /= i
            answer.add(i)
            i = 2
        }else{i++}
    }
    return Array.from(answer);
}