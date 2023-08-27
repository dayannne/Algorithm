function solution(s) {
    let answer = s
    const numbers = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    const alphabet = Object.keys(numbers);
    const number = Object.values(numbers);
    alphabet.forEach((str, index) => 
    answer = answer.indexOf(str) >= 0 ? answer.replaceAll(str,number[index]) : answer
    )
    return Number(answer);
}