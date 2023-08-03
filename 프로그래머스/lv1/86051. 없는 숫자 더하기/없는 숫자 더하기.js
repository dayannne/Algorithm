function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b)=> a-b)
    let answer = 0
    for(let i = 0 ; i < 10 ; i++){
        if(sortedNumbers.indexOf(i) === -1){
           
            answer +=  i                             
        }             
    }         
    return answer;
}