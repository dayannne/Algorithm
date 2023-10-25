function countPair(str) {
    const count = Array(10).fill(0);
    for (let i = 0; i < str.length; i++) {
        const num = parseInt(str[i]);
        count[num]++;
    }
    return count;
}

function solution(X, Y) {
    const countX = countPair(X);
    const countY = countPair(Y);
    let pair = '';

    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(countX[i], countY[i]);
        pair += i.toString().repeat(minCount);
    }


    return pair.length === 0 ? '-1' : pair == 0 ? '0' : pair;
}