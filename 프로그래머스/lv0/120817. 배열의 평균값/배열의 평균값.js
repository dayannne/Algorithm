function solution(numbers) {
    let sum = 0;
    for(let i in numbers ) {
        sum += numbers[i];
    }
    return sum/numbers.length;
}