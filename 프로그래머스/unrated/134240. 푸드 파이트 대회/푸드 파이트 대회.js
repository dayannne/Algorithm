function solution(food) {
    // push, pop으로 처리
    // 항상 짝수만큼 
    var answer = '0';
    for(let i = food.length -1 ; i > 0 ; i --){
      answer = i.toString().repeat(food[i]/2) + answer + i.toString().repeat(food[i]/2)
    }
    return answer;
}