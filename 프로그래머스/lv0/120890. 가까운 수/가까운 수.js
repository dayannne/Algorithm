function solution(array, n) {
    let min = 1000;
    let answer = 0
    for(let x of array){
        if(Math.abs(n - x) < min){
            min = Math.abs(n - x)
           answer = x
          
           }else if(Math.abs(n - x) == min){
               if(x< answer)
               answer = x
           }
    }
    return answer;
}