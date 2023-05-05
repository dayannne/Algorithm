function solution(my_string) {
    let answer = Array.from(my_string).map(s=>s.toLowerCase());
    return answer.sort().join('');
}