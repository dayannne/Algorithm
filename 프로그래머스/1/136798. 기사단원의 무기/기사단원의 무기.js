function solution(number, limit, power) {
    let total = 0;
    
    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            total++;
            continue;
        }
        
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += (j * j === i) ? 1 : 2;
            }
        }

        if (count > limit) {
            total += power;
        } else {
            total += count;
        }
    }

    return total;
}


