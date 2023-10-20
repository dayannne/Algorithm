function solution(N, stages) {
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
    // 실패율 =  아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 실패율 배열 만들기 (0,0,0,0,0)
    // stage n, 사용자 수 stages.length번
    let arr = stages.sort((a,b)=> a-b)
    let failure = {}
    let player= stages.length
    for(let i = 1; i <= N ; i++){
        arr = arr.filter((n)=> n >= i)
        const yet = arr.filter((n) => n <= i).length
        const tries = arr.filter((n) => n >= i).length
        failure[i]=yet/tries
    }

    const answer = Object.keys(failure).map((key)=> parseInt(key)).sort((a,b) => failure[b] - failure[a]);
    return answer;
}