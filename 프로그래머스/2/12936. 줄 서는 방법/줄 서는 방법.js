function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function solution(n, k) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, 3, ..., n]
    let answer = [];
    let kMod = k - 1; // 0-based index로 변환

    for (let i = n; i > 0; i--) {
        let fact = factorial(i - 1);
        let index = Math.floor(kMod / fact);
        answer.push(numbers[index]);
        numbers.splice(index, 1); // 선택한 숫자 제거
        kMod %= fact;
    }

    return answer;
}

