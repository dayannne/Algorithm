function solution(numbers) {
    let answer =  new Set();
    for(let i = 0 ; i < numbers.length ; i++){
       for(let j = 0 ; j < numbers.length ; j++){
           if(i !== j){  
                const sum = numbers[i] + numbers[j]
                answer.add(sum)
           }
         
      
       } 
    }
    answer = Array.from(answer).sort((a,b) => a-b);
    return answer;
}