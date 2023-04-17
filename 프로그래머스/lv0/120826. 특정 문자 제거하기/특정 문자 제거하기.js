function solution(my_string, letter) {
    let answer = ''
    for(let i in my_string){
        answer +=  (my_string[i] !== letter) ? my_string[i] : '';
    }
    return answer;
}