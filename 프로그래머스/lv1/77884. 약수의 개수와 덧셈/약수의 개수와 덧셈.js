function solution(left, right) {
    let answer = 0
    for(let i = left ; i <= right ; i++){
        let cnt = 1
       for(let j = 1 ; j < i ; j++){
           if(i % j === 0){
               cnt += 1
           }
       }
        answer = cnt % 2 === 0 ? answer + i : answer -= i
    }

    return answer;
}