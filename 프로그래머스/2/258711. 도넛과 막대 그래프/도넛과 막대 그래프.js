function solution(edges) {    
    const graphInfo = {}

    edges.forEach(([send,receive])=>{
        graphInfo[send] ||= { sendCount:0, receiveCount:0 }
        graphInfo[receive] ||= { sendCount:0, receiveCount:0 }

        graphInfo[send].sendCount++
        graphInfo[receive].receiveCount++
    })

    let 생성정점 = 0
    let 모양그래프개수 = 0
    let 도넛 = 0 
    let 막대 = 0 
    let 팔자 = 0

    for (let 정점 in graphInfo){
        const { sendCount, receiveCount } = graphInfo[정점]
        if(sendCount >= 2 && receiveCount === 0){
            생성정점 = +정점
            모양그래프개수 = sendCount
        }
        
        if(sendCount == 0) 막대++
        if(sendCount >= 2 && receiveCount >= 2) 팔자++
    }

    도넛 = 모양그래프개수 - 팔자 - 막대

    return [생성정점, 도넛, 막대, 팔자];
}

// 생성정점 = 모든 정점 중 받는 간선이 0인 정점 (무조건 1개)
// 모든 그래프의 갯수 = 생성정점의 보내는 간선 수
// 막대그래프 갯수 = 모든 정점 중 보내는 간선이 0 인 정점
// 8자그래프 갯수 = 모든 정점 중 보내는 간선이 2 이상 , 받는 간선이 2 이상인 정점
// 도넛그래프 갯수 = 모든 그래프 갯수 - 막대그래프 갯수 - 8자 그래프 갯수