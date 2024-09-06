function solution(numbers) {
    var answer = [];

    for(const number of numbers){
        if (number % 2 === 0) {
            // 짝수일 경우
            answer.push(number + 1);
        } else {
            // 홀수일 경우
            const binaryStr = '0' + number.toString(2);
            
            let index = binaryStr.lastIndexOf('0');
            let newBinaryStr = binaryStr.slice(0, index) + '10' + binaryStr.slice(index + 2);

            answer.push(parseInt(newBinaryStr, 2));
        }
    }

    return answer;
}
