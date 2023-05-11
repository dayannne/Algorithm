function solution(num, total) {
    let answer = [];
    let mid = total/num
    if(mid % 1 === 0){
        answer.push(mid)
    }
    let left = 1
    let right = 1
   while(answer.length < num){
       answer.unshift(Math.ceil(mid-left))
       answer.push(Math.floor(mid+right))
       left++
       right++
   }
    return answer;
} 