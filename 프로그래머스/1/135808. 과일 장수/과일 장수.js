function solution(k, m, score) {
    // 일단 상자는 무조건 k개로 나뉨
    // 상자 단위로만 판매하고 남는 사과는 버림 
    // 정렬해서 높은 사과부터 자르기
    // 사과 분리해주는 함수 만들기
    const sorted = score.sort((a,b)=>b-a)
    
    function chunk (data, size){
        const arr = []
        let result = 0
        for(let i = 0 ; i< data.length; i += size){
            if(data.slice(i, i+size).length === size)
            arr.push(data.slice(i, i+size).sort((a,b)=>a-b))
        }
                     
        for(const x of arr){
            result += x[0] * x.length        
        }
        return result
    }
    // 위 함수를 아래와 같이 단축시킬수도 있겠다.
    // const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    
    const answer = chunk(sorted, m)

    return answer;
}