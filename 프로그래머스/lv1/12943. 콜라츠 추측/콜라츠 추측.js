function solution(num) {
    let currNum = num

    for(let i = 0 ; i < 500 ; i++){
        if(currNum === 1){
            return i
            break
        }
        
        if(currNum % 2 === 0){
            currNum /= 2
        }else{
            currNum = currNum * 3 + 1
        }
    }
    return -1;
}