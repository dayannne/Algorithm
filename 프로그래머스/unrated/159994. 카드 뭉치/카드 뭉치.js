function solution(cards1, cards2, goal) {
    // 카드마다 꼭 한번씩 사용해야 한다
    // 카드는 순서대로 사용되어야 한다
    // 인덱스로 바꿔서 풀어볼까 145 23
    // shift() 로 빼내기 index =0
    const n = goal.length;
    for(let i = 0 ; i < n ; i++){
        if(cards1[0] === goal[0]){
            cards1.shift()
            goal.shift()
        }else if(cards2[0] === goal[0]){
            cards2.shift()
            goal.shift()
        }else{
            return "No"
        }
    }
    return "Yes";
}