function solution(numbers) {
    for(let i = 0 ; i <= (numbers.length-1) ; i++){
        numbers[i]*=2;
    }
    return numbers;
}