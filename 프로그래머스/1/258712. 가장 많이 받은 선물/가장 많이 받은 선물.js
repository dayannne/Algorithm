function solution(friends, gifts) {
    let 선물 = new Array(friends.length).fill().map(()=>(new Array(friends.length).fill(0)));
    const 선물개수 = {};
    friends.forEach(v => { 선물개수[v] = 0; });

    gifts.map(v=> {
        const [from, to] = v.split(" ");
        fromIndex = friends.indexOf(from);
        toIndex = friends.indexOf(to);
        선물[fromIndex][toIndex] += 1;
    })

    const 지수 = 선물.map((arr,index)=> {
        const sum1 = arr.reduce((acc,curr)=>acc+curr, 0);
        const sum2 = 선물.reduce((acc,curr)=>acc+curr[index], 0);
        return sum1 - sum2;
    })


    선물.map((arr, index)=>{
        arr.map((value, vIndex)=> {
            if (index !== vIndex) {
                if (value > 선물[vIndex][index]){
                    선물개수[friends[index]] += 1;
                } else if (value === 선물[vIndex][index] && 지수[index] > 지수[vIndex]) {
                    선물개수[friends[index]] += 1;
                }
            }
        })
    })

    const answer = Math.max(...Object.values(선물개수))
    return answer;
}