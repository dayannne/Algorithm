function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getGCDOfArray(array) {
    return array.reduce((gcd, num) => getGCD(gcd, num));
}

function solution(arrayA, arrayB) {
    const gcdA = getGCDOfArray(arrayA);
    const gcdB = getGCDOfArray(arrayB);
    
    // arrayA의 GCD로 arrayB가 나눠지는지 확인
    let aValid = arrayB.every(num => num % gcdA !== 0) ? gcdA : 0;
    // arrayB의 GCD로 arrayA가 나눠지는지 확인
    let bValid = arrayA.every(num => num % gcdB !== 0) ? gcdB : 0;
    
    // 둘 중 더 큰 값을 반환
    return Math.max(aValid, bValid);
}
