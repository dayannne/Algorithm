function solution(my_string) {
    const arr = Array.from(my_string)
     let answer = [...new Set(arr)]

    return answer.join('');
}