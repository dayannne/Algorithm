function solution(score) {
    const average = score.map(s => s.reduce((a, b) => a + b, 0) / 2);
    let answer = average.slice()
    answer = answer.map((s) => average.sort((a, b) =>  b - a).indexOf(s)+1);
    return answer;
}