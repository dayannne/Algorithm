function solution(numbers) {
    let answer = numbers.slice()
    let engNum = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    for (let i = 0; i < engNum.length; i++){
     answer = answer.replaceAll(engNum[i],i)
    }

    return parseInt(answer);
}