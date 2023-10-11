function solution(nums) {
    // 조합으로 3개씩 추출한 이중 배열
    // 합이 소수면 카운트+1
    let answer = 0;
    const combination = (comb, rests, output) =>{
        if(comb.length === 3)
            return output.push(comb)
        rests.forEach((n,i) => {
        const rest = rests.slice(i+1);
        combination([...comb,n], rest, output);
    })
    }
    const output = [];
    combination([], nums, output);
    output.forEach((arr,i)=>{
        const sum = arr.reduce((a,c)=> a+c)
        if(sum === 1) return; 
        // Math.sqrt 함수를 사용하여 제곱근까지만 반복
        for(let i = 2; i <= parseInt(Math.sqrt(sum)); i++) {
            if(sum % i === 0) return;
        } 
        return answer++; 
    })
    
    return answer;
}