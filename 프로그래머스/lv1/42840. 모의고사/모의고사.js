function solution(answers) {
    let math1 = [1, 2, 3, 4, 5]
    let math2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0,0,0]
    for(let i = 0 ; i < answers.length; i++){
        if(math1[i% math1.length] === answers[i]){
            count[0]++
        }
        if(math2[i% math2.length] === answers[i]){
            count[1]++
        }
        if(math3[i% math3.length] === answers[i]){
            count[2]++
        }
    }
    let max = Math.max(...count)
    let answer = []

count.forEach((cnt, idx) => {
  if (cnt === max) {
    answer.push(idx + 1);
    }
    });
    
    return answer;
}