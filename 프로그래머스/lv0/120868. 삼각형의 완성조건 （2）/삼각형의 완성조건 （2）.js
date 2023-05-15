function solution(sides) {
    let answer = 0
    for(let i = 1 ; i < sides[0]+sides[1] ; i++){
        let arr = [...sides,i].sort((a,b) => a-b)
        let [a,b,c] = arr
        if(a+b > c){
            answer++
        }
    }
    return answer;
}