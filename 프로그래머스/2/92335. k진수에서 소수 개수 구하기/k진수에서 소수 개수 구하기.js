function solution(n, k) {
    let count = 0
    const nums = n.toString(k).split('0')
    console.log(nums)
    for(const num of nums){
        if(parseInt(num) && isPrime(parseInt(num))) {
            count++  
        }
    }

    return count;
}

function isPrime(num){
    if(num === 1) return false
    if(num === 2) return true
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)) ; i++){
        if(num%i === 0) return false
    }
    return true
}