function solution(my_string, n) {
    let answer = '';
    for(let i in my_string){
        answer += my_string[i].repeat(n);
    }
    return answer;
}