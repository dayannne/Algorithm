function solution(prices) {
    for(let i = 0 ; i < prices.length ; i++){
        const price = prices[i]
        let period = prices.length - 1 // 가격이 떨어진 기간 index
        for(let j = i + 1 ; j < prices.length ; j++){
            const nextPrice = prices[j]
            if(price > nextPrice) {
                period = j
                break
            }
        }
        prices[i] = period - i
    }
    return prices;
}