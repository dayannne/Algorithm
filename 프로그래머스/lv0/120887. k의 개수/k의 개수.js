function solution(i, j, k) {
    let count = 0;
    for(let num = i ; num <= j ; num++){
        num += ''
        count += num.replaceAll(new RegExp(`[^${k}]`, 'g'), '').length;
    }
    return count;
}