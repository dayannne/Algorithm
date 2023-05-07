function solution(arr) {
  let answer = [arr.shift()];
  for(let x of arr){
      if(answer[answer.length-1] !== x){
          answer.push(x)
      }
  }
  return answer;
}