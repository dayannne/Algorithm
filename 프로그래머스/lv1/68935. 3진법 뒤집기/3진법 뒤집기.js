function solution(n) {
    let answer = 0
    let currNum = '';

    while (n > 0) {
        const remain = n % 3;
        currNum = remain + currNum;
        n = Math.floor(n / 3);
    }
    
    for(let i = 0 ; i < currNum.length ; i++){
        answer += currNum[i] * 3 ** i
    }
    
    return answer
}