function BFS(graph, startNode, K) {
    let delivery = new Set();
    delivery.add(startNode);
    
    const needVisit = [[startNode, graph[startNode].minCost]];

    while (needVisit.length !== 0) { 
        const [node, currCost] = needVisit.shift();
        
        const nextNodes = graph[node].connected;
        const nextCosts = graph[node].cost;
            
        for (let i = 0; i < nextNodes.length; i++) {
            const newCost = currCost + nextCosts[i];
            const nextNode = nextNodes[i];

            if (newCost < graph[nextNode].minCost) {
                graph[nextNode].minCost = newCost;

                if (newCost <= K) {
                    delivery.add(nextNode);
                    needVisit.push([nextNode, newCost]); 
                }
            }
        }
    }

    return delivery.size;
}


function solution(N, road, K) {
    const graph = {};
   
    for (const [a, b, c] of road) {
        if (!graph[a]) {
            graph[a] = { connected: [], cost: [], minCost: a === 1 ? 0 : 500000 };
        }
        if (!graph[b]) {
            graph[b] = { connected: [], cost: [], minCost: b === 1 ? 0 : 500000 };
        }

        graph[a].connected.push(b);
        graph[a].cost.push(c);
        graph[b].connected.push(a);
        graph[b].cost.push(c);
    }

    const answer = BFS(graph, 1, K);

    return answer;
}
