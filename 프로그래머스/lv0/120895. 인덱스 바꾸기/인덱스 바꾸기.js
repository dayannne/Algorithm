function solution(my_string, num1, num2) {
    const answer = my_string.split('')
    const numStr1 = answer[num1]
    answer[num1] = answer[num2]
    answer[num2] = numStr1
    return answer.join('');
}