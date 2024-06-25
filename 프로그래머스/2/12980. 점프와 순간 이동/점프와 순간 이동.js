function solution(n)
{
    // n % 2 === 0이 될 때까지 반복
    // n % 2 === 1일 때는 usage += 1
    let usage = 0;
    let point = 0; // 현재까지 온 거리
    while(n > 0){
            if(n % 2 === 0){
                n /= 2
                
            }else{
                usage++
                n--
            }
    } 
 
   

    return usage;
}