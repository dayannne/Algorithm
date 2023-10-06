function solution(k, score) {
    let answer = [];
    for(let i = 0; i < score.length ; i++){
       let hallOfFame = score.slice(0, i+1).sort((a,b)=>b-a).slice(0, k)
       answer.push(hallOfFame[hallOfFame.length-1])
    }
    return answer;
}