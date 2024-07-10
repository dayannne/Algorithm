function solution(want, number, discount) {
    let count = 0;

    const length = want.length
    const lookup = {}
    const discounts = Array(number.length).fill(0)
    
    for(let i = 0 ; i < want.length ; i++){
        lookup[want[i]] = i
    }

    let i = 0
    while(i + 10 <= discount.length){
        const numbers = number.slice()
        for(let j = i ; j < i + 10 ; j++){
            if(lookup[discount[j]] >= 0) numbers[lookup[discount[j]]] -= 1
        }
        const discounted = numbers.every(n => n <= 0) 
     
        if(discounted) count++
        i++
    }

    return count;
}