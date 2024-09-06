function solution(storey) {
    let count = 0;  // 마법의 돌 사용 횟수
    let currStorey = storey;

    while (currStorey > 0) {
        let lastDigit = currStorey % 10;  // 현재 자릿수 (1의 자리)

        // 6 이상이면 올림 처리, 5일 때는 다음 자릿수 고려
        if (lastDigit > 5 || (lastDigit == 5 && Math.floor(currStorey / 10) % 10 >= 5)) {
            count += (10 - lastDigit);  // 올림 제거
            currStorey = Math.floor(currStorey / 10) + 1;  // 올림에 따라 다음 자릿수 증가
        } else {
            count += lastDigit;  // 내림제거
            currStorey = Math.floor(currStorey / 10);  // 다음 자릿수로 이동
        }
    }

    return count;
}
