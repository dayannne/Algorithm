function solution(n) { 
    let num = n - 1;
    const arr = ['1', '2', '4'];
    
    let answer = '';

    while (num >= 0) {
        answer = arr[num % 3] + answer;
        num = Math.floor(num / 3) - 1;
    }

    return answer;
}

// function solution(n) { 
//     n -= 1

//     const arr = ['1', '2', '4']
//     function recursive(result, n){
//         result = arr[n % 3] + result
//         console.log(result)
//         if(Math.floor(n / 3) === 0) return result
//         return recursive(result, Math.floor(n / 3) - 1)
//     }
    
//     const answer = recursive('', n)

//     return answer+''
// }



