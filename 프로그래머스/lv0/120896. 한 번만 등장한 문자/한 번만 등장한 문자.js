function solution(s) {
    let answer = [];
   
   for(let str of s){
    if(s.replaceAll(new RegExp(`[^${str}]`,'g'), '').length === 1){
        answer.push(str)
    }
  
}
    return answer.sort().join('');
}